export function login(credentials) {
    const username = credentials.username
    const password = credentials.password
    const creds = {password, username}
    let configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(creds)
    }
    return dispatch => { 
        dispatch({ type: 'LOGGING_IN'})
        fetch('http://localhost:3001/session', configObj)
        .then(resp => resp.json())
        .then( jsonResp => {
            localStorage.setItem("token", jsonResp.data.attributes.token)
            dispatch({type: 'LOGIN_USER', payload: jsonResp.data.attributes})
        })
    }
}

export function signup(credentials) {
    const username = credentials.username
    const password = credentials.password
    const creds = {password, username}
    let configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(creds)
    }
    return dispatch => {
        dispatch({type: 'LOGGING_IN'})
        fetch('http://localhost:3001/users', configObj)
        .then(resp => resp.json())
        .then( jsonResp => {
            localStorage.setItem("token", jsonResp.data.attributes.token)
            dispatch({type: 'LOGIN_USER', payload: jsonResp.data.attributes})
        })
    }
}

export function fetchLoggedInUser() {
    return dispatch => {
        const token = localStorage.token
        if (token && token !== "null") {
            const configObj ={
                method: 'GET',
                headers: {
                    "Content-Type": 'application/json',
                    Accept: 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
            return fetch("http://localhost:3001/auto-login", configObj)
            .then(resp => resp.json())
            .then(jsonResp => dispatch({ type: 'LOGIN_USER', payload: jsonResp.data.attributes}))
        }
    }
}

export function logout(user) {
    localStorage.setItem("token", null)
    return dispatch => {
        dispatch({type: 'LOGOUT', payload: user})
    }
}