function enterChat(event) {
    const chat = event.target.closest('.friend')
    const clickedId = chat.dataset.id
    renderAllChat(clickedId)
}

function renderAllFriends() {
    function renderFriends() {
        state.friendsList = state.friendsList.filter(friend => friend.id !== state.userId)
        state.chatList = []

        return state.friendsList.map((friend) => `
            <div class="friend" data-id="${friend.id}">
                <div class="userPictureSmall">${friend.name[0]}</div>
                <div class="friendInfo">
                    <h2>${friend.name}</h2>
                    <p>MOST RECENT MESSAGE SENT HERE</p>
                </div>
            </div>
        `
        ).join("")
    }
    
    document.querySelector("#content").innerHTML = `
        <section class="nav2">
            <div class="userPictureBig2" onClick="signOut()">
                <img class="signOut" src="../../images/signOut.svg" alt="" />
                <h3 class="userName">${state.userName[0]}</h3>
            </div>
            <input
                onChange="searchFriends()"
                class="searchChats"
                type="text"
                name="searchChats"
            />
        </section>

        <section onClick="enterChat(event)" class="allFriends">
            ${renderFriends()}
        </section>
    `
}