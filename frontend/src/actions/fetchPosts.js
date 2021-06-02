export function fetchPosts() {
    return dispatch => {
        dispatch({type: 'BEGIN_FETCHING_POSTS'});
        fetch('http://localhost:3001/posts')
            .then(resp => resp.json())
            .then(jsonResp => dispatch({ type: 'ADD_POSTS', payload: jsonResp.data}))
    }
}