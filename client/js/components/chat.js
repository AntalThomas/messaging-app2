async function updateUserChats(id) {
    await fetch(`/api/chats/${id}`)
        .then(res => res.json())
        .then(chats =>  {
            state.chatList = chats
        })
}

async function renderChat(friendId) {
    await updateUserChats(friendId)

    console.log(state.chatList)

    if (state.chatList.length < 1) console.log("EMPTY")
    else {
        return state.chatList.map((chat) => `
            <div class="userMessage">
                <div class="userPictureSmall">${friendId}</div>
                <div class="messageSent">${chat}</div>
            </div>
        `
        ).join("")
    }
}

function renderAllChat(friendId) {
    document.querySelector("#content").innerHTML = `
        <section class="nav">
            <button onClick="renderAllFriends()" class="arrowBack">
                <img class="arrowBackImg" src="../../images/arrowBack.svg" alt=""/>
            </button>

            <div class="userPictureBig">A</div>
            <h2>friend[name]</h2>
        </section>
        <section class="conversation">${renderChat(friendId)}</section>

        <section class="userInput">
            <form class="sendMessageForm" action="" onSubmit="sendMessage()">
                <input class="sendMessageInput" type="text" name="userMessage"/>
                <button class="sendMessageButton"><img src="../../images/send.svg" alt=""/></button>
            </form>
        </section>
    `
}