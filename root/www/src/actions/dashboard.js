import axios from 'axios';
import { setAlert } from './alert';

import {
    GET_DASHBOARD,
    DASHBOARD_ERROR,
    UPDATE_DASHBOARD
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

// Add Calendar entry
export const addCalendar = (formData, history) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.put('/api/dashboard/calendar', formData, config);

        dispatch({
            type: UPDATE_DASHBOARD,
            payload: res.data
        });
        // This was for dashboard Creation, do i still need this?
        dispatch(setAlert('Calendar entry added', 'success'));
        history.push('/dashboard');
    } catch (err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        
        dispatch({
            type: DASHBOARD_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

// Add Journal entry
export const addJournal = (formData, history) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.put('/api/dashboard/journal', formData, config);

        dispatch({
            type: UPDATE_DASHBOARD,
            payload: res.data
        });
        // This was for dashboard Creation, do i still need this?
        dispatch(setAlert('Journal entry added', 'success'));
        history.push('/dashboard');
    } catch (err) {
        const errors = err.response.data.errors;

        if(errors) {
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        
        dispatch({
            type: DASHBOARD_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}





// I dont need this
// //  Create or Update dashboard
// export const createProfile = (formData, history, edit = false) => async dispatch => {
//     try {
//         const config = {
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }

//         const res = await axios.put('/api/dashboard', formData, config);


//         dispatch({
//             type: GET_DASHBOARD,
//             payload: res.data
//         });
//         // This was for dashboard Creation, do i still need this?
//         dispatch(setAlert(edit ? 'Dashboard Updated' : 'Dashboard Created', 'success'));

//         if(!edit) {
//             history.push('/dashboard');
//         }
//     } catch (err) {
//         const errors = err.response.data.errors;

//         if(errors) {
//             errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
//         }
        
//         dispatch({
//             type: DASHBOARD_ERROR,
//             payload: { msg: err.response.statusText, status: err.response.status }
//         });
//     }
// }
