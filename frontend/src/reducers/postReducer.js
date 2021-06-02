export default function postReducer(
    state = {
        posts: []
    }, action
) {
    switch (action.type) {
        case 'ADD_POSTS':
            return {
                ...state, posts: action.payload
            }
        default:
            return state
    }
}