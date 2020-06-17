// Checks to see if token is there, if it is, itll add it to the header
import axios from 'axios';

// checks localstorage for token
const setAuthToken = token => {
    if(token) {
        axios.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete axios.defaults.headers.common['x-auth-token'];
    }
};

export default setAuthToken;