export function fetchComments(postId) {
    return dispatch => {
        dispatch({type: "FETCHING_COMMENTS"})
        const configObj ={
            method: 'GET',
            headers: {
                "Content-Type": 'application/json',
                Accept: 'application/json',
                'PostId': `${postId}`
            }
        }
        fetch('http://localhost:3001/comments', configObj)
        .then(resp => resp.json())
        .then(jsonResp => dispatch({type: "ADD_COMMENTS", payload: jsonResp.data}))
    }
}

export function addNewComment(comment) {
    console.log(comment)
    const configObj = {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(comment)
    }
    return dispatch => {
        dispatch({type: "BEGIN_ADDING_COMMENT"})
        fetch("http://localhost:3001/comments", configObj)
        .then(resp => resp.json())
        .then(jsonResp => dispatch({type: "ADD_COMMENT", payload: jsonResp.data}))
    }
}