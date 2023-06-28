async function renderAllChat(friendId) {
    const data = { friendId: friendId }

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
        <h1 class="toGetFriendId">${friendId}</h1>
    `
}

function sendMessage(event) {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.target))
    const friendId = document.querySelector('.toGetFriendId').textContent

    if (!data.message.trim()) friendId = ""
    else {
        fetch(`/api/chats/send/${friendId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(chat => {
                state.chatList.push(chat)
                renderAllChat(friendId)
            })
    }
}

function renderChat(friendId) {
    if (state.chatList.length < 1) return `<div class="noMessage">Say something to your friend</div>`
    else {
        return state.chatList.map((chat) => {
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