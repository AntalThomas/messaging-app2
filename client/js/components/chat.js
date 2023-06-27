async function renderAllChat(friendId) {
    function renderChat() {
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

    function getUser(id) {
        fetch("/api/chat/:id")
    }
    
    document.querySelector("#content").innerHTML = `
        <section class="nav">
            <a href="/allchats" class="arrowBack">
                <img class="arrowBackImg" src="../../images/arrowBack.svg" alt=""/>
            </a>

            <div class="userPictureBig">A</div>
            <h2>friend[name]</h2>
        </section>
    `
}