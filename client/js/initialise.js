let state = {
    userEmail: null,
    userName: null,
    userId: null,
    friendsList: [],
    chatList: []
}

function renderLogin() {
    document.querySelector('#content').innerHTML =
    `
        <div class="visual">
            <img src="../../images/bubble.svg" alt="" />
            <h2>Welcome to <br/><span>Messaging App</span><br/> by Blake Varbai-Heward</h2>
        </div>
            
        <div class="forms">
            <form action="" onSubmit="login(event)">
                <div class="inputs">
                    <input class="loginInput" type="text" placeholder="Email" name="email"/>
                    <input class="loginInput" type="password" placeholder="Password" name="password"/>
                </div>
                
                <button>Log In</button>
            </form>
            
            <form action="" onSubmit="renderSignUp()">
                <button>Create New Account</button>
            </form>
        </div>
    `
}

fetch("/api/getFriends")
    .then(res => res.json())
    .then(users =>  {
        state.friendsList = users
    })

renderLogin()