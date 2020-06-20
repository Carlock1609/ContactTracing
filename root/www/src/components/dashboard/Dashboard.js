import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';
// import Spinner from '../layout/Spinner';
import Calendar from './Calendar';
import { getCurrentDashboard } from '../../actions/dashboard';

const Dashboard = ({ getCurrentDashboard, auth: { user }, dashboard: { dashboard } }) => {
    useEffect(() => {
        getCurrentDashboard();
    }, [getCurrentDashboard]);
            
    return (
        <Fragment>
        <h1 className="large text-primary">Dashboard</h1>
        <p className="lead">
          <i className="fas fa-user" /> Welcome {user && user.name}
        </p>
        {dashboard !== null ? (
          <Fragment>
            <DashboardActions />
            <Calendar calendar={dashboard.calendar} />
  
          </Fragment>
        ) : (
          <Fragment>
            <p>You have not Registered yet</p>
            <Link to="/register">Register</Link>
          </Fragment>
        )}
      </Fragment>
    );
};

Dashboard.propTypes = {
    getCurrentDashboard: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    dashboard: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    dashboard: state.dashboard
})

export default connect(
    mapStateToProps,
    { getCurrentDashboard }
)(Dashboard);



// return (
//     <Fragment>
//         <h1 className="large text-dark">Dashboard</h1>
//         <p>
//             <i className="fas fa-user"></i> {' '}
//             Welcome { user && user.name }
//         </p>
//         <Fragment>
//             <DashboardActions />
//             <Calendar calendar={dashboard.calendar} />
//         </Fragment>
//     </Fragment>
// );