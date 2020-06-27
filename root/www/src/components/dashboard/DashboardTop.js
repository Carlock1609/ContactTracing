import React from 'react';
import PropTypes from 'prop-types';
import Calendar from '../calendar/Calendar';

const DashboardTop = ({ dashboard: { calendar } }) => {
    return (
        <div>
            <Calendar calendar={calendar} />
        </div>
    )
};

DashboardTop.propTypes = {
    dashboard: PropTypes.object.isRequired
};

export default DashboardTop;
