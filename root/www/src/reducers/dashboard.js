import { GET_DASHBOARD, DASHBOARD_ERROR } from "../actions/types";

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
        default:
            return state
    }
};