import React from 'react';
import { Link } from 'react-router-dom';

export const DashboardActions = () => {
    return (
        <div>
            <Link to='/calendar-entry'>Add Calender Entry</Link>
            <Link to='/journal-entry'>Add Journal Entry</Link>
        </div>
    )
}

export default DashboardActions;