export function fetchPosts() {
    return dispatch => {
        dispatch({type: 'BEGIN_FETCHING_POSTS'});
        fetch('http://localhost:3001/posts')
            .then(resp => resp.json())
            .then(jsonResp => dispatch({ type: 'ADD_POSTS', payload: jsonResp.data}))
    }
}

export function addNewPost(formData) {
    debugger
    let configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }, 
        body: formData
    }
    return dispatch => {
        fetch('http://localhost:3001/posts', configObj)
        .then(resp => resp.json())
        .then(jsonResp => console.log(jsonResp))
    }
}