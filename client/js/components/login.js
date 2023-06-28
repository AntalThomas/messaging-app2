async function login(event) {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.target))

    await fetch('/api/sessions', {
        method: 'POST',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => {
            console.log(res, "log in")

            if(res.error) {
                renderLogin()
                renderError(res.error)
            } else {
                state.userEmail = res.email
                state.userName = res.name
                renderAllFriends(res.id)
            }
        })
}

function renderError(errorMessage) {
    document.querySelector('#content').innerHTML =  `
        <h2 style='color: red;'>${errorMessage}</h2>
    ` + document.querySelector('#content').innerHTML
}