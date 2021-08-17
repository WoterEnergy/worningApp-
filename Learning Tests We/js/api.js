const REQUEST_URL = 'https://ajax.test-danit.com/api/v2/cards';

const autorization = async (email, password) => {
    const response = await fetch(`${REQUEST_URL}/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ email: email, password: password })
    })
    if(response.status !== 200) {
        alert ("Incorrect username or password")
    } else {
        const token = await response.text();
        localStorage.setItem('token', token)
        return token
    }
}

export{autorization}