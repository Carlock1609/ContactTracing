import React from 'react';
// import PropTypes from 'prop-types';
// import Journal from '../journal/Journal';
import AddJournal from '../dashboard-forms/addJournal';

const DashboardBottom = (props) => {
    return (
        <div>
            <AddJournal />
            {/* <Journal journal={journal} /> */}
        </div>
    )
};

// DashboardBottom.propTypes = {
//     dashboard: PropTypes.object.isRequired
// };

export default DashboardBottom;
