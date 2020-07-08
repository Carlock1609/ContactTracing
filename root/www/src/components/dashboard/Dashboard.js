import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import DashboardActions from './DashboardActions';
import AddJournal from '../dashboard-forms/addJournal';
import Calendar from '../calendar/Calendar';
// import JournalEntries from '../journal/JournalEntries';
import { getCurrentDashboard } from '../../actions/dashboard';
import Spinner from '../layout/Spinner';

const Dashboard = ({ getCurrentDashboard, auth: { user }, dashboard: { dashboard, loading } }) => {
    useEffect(() => {
        getCurrentDashboard();
    }, [getCurrentDashboard]);

            
    return (
        // <Fragment>
        //   <JournalEntries dashboard={dashboard} />
        // </Fragment>
        <Fragment>
          {/* TESTING JOURNALENTRY COMPONENT */}
          {/* if profile is null or loading then show spinner, else load content */}
          {dashboard === null || loading ? <Spinner /> : 
            <Fragment>
              <p className="lead">
                <i className="fas fa-user" /> Welcome {user && user.name}
              </p>
              {dashboard !== null ? (
                <Fragment>
                  <DashboardActions />
                  <div id="calenderDiv">
                    <Fragment>
                      <Calendar dashboard={dashboard} />
                    </Fragment>
                  </div>
                  {/* THE SPLIT BETWEEN CALENDER AND JOURNAL */}
                  <br/>
                  <hr/>
                  <br/>
                  {/* END SPLIT */}
                  <div id="journalDiv">
                    <Fragment>
                      <AddJournal />
                    </Fragment>
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