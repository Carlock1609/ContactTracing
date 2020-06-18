import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getCurrentDashboard } from '../../actions/dashboard';

const Dashboard = ({ getCurrentDashboard, auth, dashboard }) => {
    useEffect(() => {
        getCurrentDashboard();
    }, []);
            
    return <div>Dashboard</div>
};

Dashboard.propTypes = {
    getCurrentDashboard: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    dashboard: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    dashboard: state.dashboard
})

export default connect(
    mapStateToProps,
    { getCurrentDashboard }
)(Dashboard);