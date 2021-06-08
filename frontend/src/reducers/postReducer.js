export default function postReducer(
    state = {
        posts: [],
        post: [],
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

        case 'BEGIN_FETCHING_POST':
            return {
                ...state, loading: true
            }

        case 'DISPLAY_POST':
            return {
                ...state,
                post: action.payload,
                loading: false
            }

        case 'BEGIN_ADDING_POST':
            return {
                ...state, loading: true
            }
        case 'ADD_NEW_POST':
            return {
                ...state, posts: [
                    ...state.posts, action.payload
                ],
                loading: false
            }
        default:
            return state
    }
}