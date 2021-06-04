export function login() {
    return dispatch => {
        dispatch({type: 'LOGGING-IN'})
        fetch('http://localhost:3001/users')
        .then(resp => resp.json())
        .then( jsonResp => console.log(jsonResp))
    }
}