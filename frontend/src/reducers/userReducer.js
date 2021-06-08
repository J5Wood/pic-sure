export default function userReducer(
    state = {
        user: null,
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
                user: action.payload.username,
                loading: false
            }

        case 'LOGOUT':
            return {
                user: null,
                loading: false
            }

            default:
                return state
    }
}
