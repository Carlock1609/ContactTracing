import React from 'react';
import PropTypes from 'prop-types';
import Journal from './Journal';

const DashboardBottom = ({ dashboard: { journal } }) => {
    return (
        <div>
            <Journal journal={journal} />
        </div>
    )
};

DashboardBottom.propTypes = {
    dashboard: PropTypes.object.isRequired
};

export default DashboardBottom;
