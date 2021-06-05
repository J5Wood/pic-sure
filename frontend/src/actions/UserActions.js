export function signup(credentials) {
    const username = credentials.username
    const password_digest = credentials.password
    const creds = {password_digest, username}
    let configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(creds)
    }
    return dispatch => {
        dispatch({type: 'LOGGING-IN'})
        fetch('http://localhost:3001/users', configObj)
        .then(resp => resp.json())
        .then( jsonResp => console.log(jsonResp))
    }
}