import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
// I want the user to be able to pick any time rather than set time.
// import Moment from 'react-moment';
import { connect } from 'react-redux';
// import { deleteJournal } from '../../actions/dashboard';
// import AddJournal from '../dashboard-forms/addJournal';
import { getCurrentDashboard } from '../../actions/dashboard';
import JournalEntries from './JournalEntries';


const Journal = ({ getCurrentDashboard, dashboard: { dashboard, loading } }) => {
    useEffect(() => {
      getCurrentDashboard();
    }, [getCurrentDashboard]);
    

    return (
      <Fragment>
        <h3 className="mt-5">JOURNAL ENTRIES</h3>
        <div className="container">
          <JournalEntries dashboard={dashboard} />
        </div>
      </Fragment>
    ); 
};
 
Journal.propTypes = {
  getCurrentDashboard: PropTypes.func.isRequired,
  // auth: PropTypes.object.isRequired,
  dashboard: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    // auth: state.auth,
    dashboard: state.dashboard,
});


export default connect(
  mapStateToProps,
  { getCurrentDashboard },
  )(Journal);

    
    // const Calendar = ({ calendar }) => {
    //     const calendars = calendar.map(cal => (
    //         <tr key={cal._id}>
    //             <td>{cal.date}</td>
    //             <td>{cal.time}</td>
    //             <td>{cal.choice}</td>
    //             <td>{cal.notes}</td>
    //             <td><button className="btn btn-dark">Delete</button></td>
    //         </tr>
    //     ));
    
    //     return (
    //         <Fragment>
    //             <h2>Calendar</h2>
    //             <table className="table">
    //                 <thead>
    //                     <tr>
    //                         <th>date</th>
    //                         <th>notes</th>
    //                         <th>choice</th>
    //                         <th>notes</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>{calenders}</tbody>
    //             </table>
    //         </Fragment>
    //     );
    // };