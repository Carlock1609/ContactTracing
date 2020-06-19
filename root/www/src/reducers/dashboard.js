import { GET_DASHBOARD, DASHBOARD_ERROR, CLEAR_PROFILE } from "../actions/types";

const initialState = {
    dashboard: null,
    loading: true,
    error: {}
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case GET_DASHBOARD:
            return {
                ...state,
                dashboard: payload,
                loading: false
            }
        case DASHBOARD_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }
        case CLEAR_PROFILE:
            return {
                ...state,
                dashboard: null,
                loading: false
            }
        default:
            return state
    }
};