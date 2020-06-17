import axios from 'axios';

import {
    GET_DASHBOARD,
    DASHBOARD_ERROR
} from './types';

// Get current users calendar/journal
export const getCurrentDashboard = () => async dispatch => {
    try {
        const res_journal = await axios.get('/api/journal');
        const res_calendar = await axios.get('/api/calendar');

        dispatch({
            type: GET_DASHBOARD,
            payload: [res_journal, res_calendar]
        });
    } catch (err) {
        dispatch({
            type: DASHBOARD_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};