import axios from 'axios';

import {
    GET_DASHBOARD,
    DASHBOARD_ERROR
} from './types';

// Get current users calendar/journal
export const getCurrentDashboard = () => async dispatch => {
    try {
        const res = await axios.get('/api/dashboard');
     

        dispatch({
            type: GET_DASHBOARD,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: DASHBOARD_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};