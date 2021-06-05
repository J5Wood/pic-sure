export default function userReducer(
    state = {
        user: [],
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
                
                loading: false
            }

            default:
                return state
    }
}
