import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import DashboardActions from './DashboardActions';
import DashboardTop from './DashboardTop';
import DashboardBottom from './DashboardBottom';
import { getCurrentDashboard } from '../../actions/dashboard';
import Spinner from '../layout/Spinner';

const Dashboard = ({ getCurrentDashboard, auth: { user }, dashboard: { dashboard, loading } }) => {
    useEffect(() => {
        getCurrentDashboard();
    }, [getCurrentDashboard]);
            
    return (
        <Fragment>
          {/* if profile is null or loading then show spinner, else load content */}
          {dashboard === null || loading ? <Spinner /> : 
            <Fragment>
              <p className="lead">
                <i className="fas fa-user" /> Welcome {user && user.name}
              </p>
              {dashboard !== null ? (
                <Fragment>
                  {/* <DashboardActions /> */}
                  <div id="calenderDiv">
                    <Fragment>
                      <DashboardTop dashboard={dashboard} />
                    </Fragment>
                  </div>
                  {/* THE SPLIT BETWEEN CALENDER AND JOURNAL */}
                  <br/>
                  <hr/>
                  <br/>
                  {/* END SPLIT */}
                  <div id="journalDiv">
                    {dashboard.journal.length > 0 ? (
                      <Fragment>
                        <DashboardBottom dashboard={dashboard} />
                      </Fragment>
                      ) : (
                        <div>
                          <Fragment>
                            <DashboardBottom dashboard={dashboard} />
                          </Fragment>
                          <h4>No Journal entries</h4>
                        </div>
                      )}
                  </div>
                </Fragment>
              ) : (
                <Fragment>
                  <p>You have not Registered yet</p>
                  <Link to="/register">Register</Link>
                </Fragment>
              )}
            </Fragment>
          }
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
});

export default connect(
    mapStateToProps,
    { getCurrentDashboard }
)(Dashboard);