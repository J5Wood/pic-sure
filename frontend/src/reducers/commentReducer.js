export default function commentReducer(
    state = {
        comments: [],
        loading: false
    }, action
) {
    switch (action.type) {

        case "FETCHING_COMMENTS":
            return {
                ...state,
                loading: true
            }

        case "ADD_COMMENTS":
            return {
                comments: action.payload,
                loading: false
            }

        default:
            return state

    }
}