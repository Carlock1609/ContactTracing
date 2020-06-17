import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR
} from '../actions/types';

// Looking in the redux store
const initialState = {
    // looking for registration token
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    // loading - true means we want it to load - false means its done loading
    loading: true,
    user: null
}

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }
        case REGISTER_SUCCESS:
            // payload is an object containing token etc,.
            localStorage.setItem('token', payload.token);
            // If register success redeclare initialState with different values
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                // loading - true means we want it to load - false means its done loading
                loading: false
            }
        case REGISTER_FAIL:
            case AUTH_ERROR:
            // If fails we want to remove the token completely
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                // loading - true means we want it to load - false means its done loading
                loading: false
            }
        default:
            return state;
    }
};