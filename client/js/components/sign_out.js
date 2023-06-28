function signOut() {
    fetch(`/api/sessions`, {
        method: 'DELETE'
    })
    .then(() => {
        state.userEmail = null,
        state.userName = null,
        state.userId = null,
        state.chatList = []

        fetch("/api/getFriends")
        .then(res => res.json())
        .then(users =>  {
            state.friendsList = users
        })
        
        renderLogin()
    })
}