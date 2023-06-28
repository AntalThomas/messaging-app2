function renderSignUp() {
    document.querySelector('#content').innerHTML = `
        <div class="visual">
            <img src="../../images/bubble.svg" alt="" />
            <h2>Create your account for<br/><span>Messaging App</span><br/>by Blake Varbai-Heward</h2>
        </div>

        <div class="forms">
            <form action="" onSubmit="signUp(event)">
                <div class="inputs">
                    <input class="signUpInput" type="text" placeholder="Name" name="name"/>
                    <input class="signUpInput" type="text" placeholder="Email" name="email"/>
                    <input class="signUpInput" type="password" placeholder="Password" name="password"/>
                </div>

                <button>Create Account</button>
            </form>

            <form action="" onSubmit="renderLogin()">
                <button>Create New Account</button>
            </form>
        </div>
    `
}

async function signUp(event) {
    event.preventDefault()
    const form = event.target
    const data =  Object.fromEntries(new FormData(form))

    await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
        if(res.error) {
            renderSignUp()
            renderError(res.error)
        } else {
            console.log(res)
            state.userEmail = res.email
            state.userName = res.name
            
            renderAllFriends(res.id)
        }
    })
}