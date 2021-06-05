export default function userReducer(
    state = {
        loading: false
    }, action
) {
    switch (action.type) {

        case 'LOGGING_IN':
            return {
                ...state, loading: true
            }

        case 'LOGIN_USER':
            return {
                ...state, loading: false
            }

            default:
                return state
    }
}
