export default function postReducer(
    state = {
        posts: [],
        loading: false
    }, action
) {
    switch (action.type) {

        case 'BEGIN_FETCHING_POSTS':
            return {
                ...state, loading: true
            }
        case 'ADD_POSTS':
            return {
                ...state, 
                posts: action.payload,
                loading: false
            }
        default:
            return state
    }
}