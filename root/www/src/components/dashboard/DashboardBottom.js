import React from 'react';
// import PropTypes from 'prop-types';
// import Journal from '../journal/Journal';
import AddJournal from '../dashboard-forms/addJournal';

const DashboardBottom = (props) => {
    return (
        <div>
            <div className="text-center">
                <h4>CREATE A JOURNAL ENTRY</h4>     
            </div>
            <AddJournal />
            {/* <Journal journal={journal} /> */}
            <hr/>
        </div>
    )
};

// DashboardBottom.propTypes = {
//     dashboard: PropTypes.object.isRequired
// };

export default DashboardBottom;
