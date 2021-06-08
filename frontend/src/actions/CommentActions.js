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