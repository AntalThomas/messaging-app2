function enterChat(event) {
    const chat = event.target.closest('.friend')
    const clickedId = chat.dataset.id

    renderAllChat(clickedId)
}

function renderAllFriends(userId) {
    state.userId = userId

    function renderFriends() {
        state.friendsList = state.friendsList.filter(friend => friend.id !== state.userId)
        state.chatList = []

        return state.friendsList.map((friend) => `
            <div class="friend" data-id="${friend.id}">
                <div class="userPictureSmall2">${friend.name[0]}</div>
                <div class="friendInfo">
                    <h2>${friend.name}</h2>
                </div>
            </div>
        `
        ).join("")
    }
    
    document.querySelector("#content").innerHTML = `
        <section class="nav2">
            <div class="userPictureBig2" onClick="signOut()">
                <img class="signOut" src="../../images/signOut.svg" alt="" />
            </div>
            <input
                onInput="searchFriends(event)"
                class="searchChats"
                placeholder="Search by name"
            />
        </section>

        <section onClick="enterChat(event)" class="allFriends">
            ${renderFriends()}
        </section>
    `
}

function searchFriends(event) {
    event.preventDefault()
    const filterInput = document.querySelector('.searchChats').value.trim().toLowerCase()
    state.filteredFriends = []

    for (let i = 0; i < state.friendsList.length; i++) {
        if (state.friendsList[i].name.toLowerCase().includes(filterInput)) {
            state.filteredFriends.push(state.friendsList[i])
        }
    }

    renderFilteredFriends()
}

function renderFilteredFriends() {
    document.querySelector(".allFriends").innerHTML = state.filteredFriends.map(friend => `
            <div class="friend" data-id="${friend.id}">
                <div class="userPictureSmall2">${friend.name[0]}</div>
                <div class="friendInfo">
                    <h2>${friend.name}</h2>
                </div>
            </div>
     `
    ).join("")
}