const socket = io('http://localhost:3001')
// 'connection' message is sent
socket.on('connection')

// listens for 'message' from the backend then executes code when heard
socket.on('message', data => {
    createSendMessageNode(data, "sender")
    scrollBottom()
})

function scrollBottom() {
    const div = document.getElementById("content")
    div.scrollTop = div.scrollHeight
}

async function renderAllChat(friendId) {
    const data = { friendId: friendId }
    state.friendId = friendId


    await fetch(`/api/chats`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(chats =>  {
        state.chatList = chats
    })

    document.querySelector("#content").innerHTML = `
        <section class="nav">
            <button onClick="renderAllFriends()" class="arrowBack">
                <img class="arrowBackImg" src="../../images/arrowBack.svg" alt=""/>
            </button>

            <div class="userPictureBig">${friendId}</div>
            <h2>${friendId}</h2>
        </section>
        <section class="conversation">${renderChat(friendId)}</section>
        <section class="userInput">
            <form class="sendMessageForm" action="" onSubmit="sendMessage(event)">
                <input class="sendMessageInput" type="text" name="message"/>
                <button class="sendMessageButton">
                    <img src="../../images/send.svg" alt=""/>
                </button>
            </form>
        </section>
    ` 

    scrollBottom()
}

function createSendMessageNode(message, sendReceive) {
    const conversation = document.querySelector('.conversation')
    const messageDiv = document.createElement("div")
    messageDiv.setAttribute("class", "userMessage")

    const messageDiv2 = document.createElement("div")
    messageDiv2.setAttribute("class", "userPictureSmall")
    messageDiv2.innerHTML = state.userId

    const messageDiv3 = document.createElement("div")
    messageDiv3.setAttribute("class", `messageSent ${sendReceive}`)
    messageDiv3.innerHTML = message
    
    messageDiv.appendChild(messageDiv2)
    messageDiv.appendChild(messageDiv3)

    conversation.appendChild(messageDiv)
}

async function sendMessage(event) {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.target))

    if (!data.message.trim()) event.target.value = ""
    else {
        // sends out 'message' message to the backend
        socket.emit('message', data.message)
        
        await fetch(`/api/chats/send/${state.friendId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(chat => {
            state.chatList.push(chat)
            renderAllChat(state.friendId)
        })
    }

    scrollBottom()
}

function renderChat(friendId) {
    if (state.chatList.length < 1) {
        return `<div class="noMessage">Say something to your friend</div>`
    } else {
        return state.chatList.map((chat) => {
            console.log(chat.sender, chat.receiver)
            if (chat.receiver === friendId) {
                return `
                    <div class="userMessage">
                        <div class="userPictureSmall receiver">${chat.id}</div>
                        <div class="messageSent receiver">${chat.message}</div>
                    </div>
                `
            } else {
                return `
                    <div class="userMessage">
                        <div class="userPictureSmall sender">${chat.id}</div>
                        <div class="messageSent sender">${chat.message}</div>
                    </div>
                `
            }
        }).join("")
    }
}