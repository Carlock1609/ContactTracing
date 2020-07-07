import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// I want the user to be able to pick any time rather than set time.
// import moment from 'moment';
import { connect } from 'react-redux';
import CalendarUI from './CalendarUI';
// import AddCalendar from '../dashboard-forms/addCalendar'
import { deleteCalendar } from '../../actions/dashboard';

export const Calendar = ({ dashboard, deleteCalendar }) => {
    // This is the calendar entry form that should eitehr pop up or you can input
    const calendarEntries = dashboard.calendar.map(cal => (
      <tr key={cal._id}>
        <td>{cal.date}</td>
        <td>{cal.time}</td>
        <td>{cal.choice}</td>
        <td>{cal.notes}</td>
        <td><button onClick={() => deleteCalendar(cal._id)} className="btn btn-dark">Delete</button></td>
      </tr>
    ));

    return (
      <Fragment>
        <h2>Calendar</h2>
        {/* <AddCalendar /> */}
        <table>
          <thead>
            <tr>
                <th>date</th>
                <th>time</th>
                <th>choice</th>
                <th>notes</th>
            </tr>
          </thead>
          <tbody>{calendarEntries}</tbody>
        </table>

        <CalendarUI />
        {/* <div id="calendar"></div> */}
        {/* <div id="calendar"> */}
          {/* {weekdayshortname} */}
          {/* {calendarUI.container} */}
          {/* <div id="calendar"></div> */}
          {/* {calendarContainer} */}
        {/* </div> */}

      </Fragment>
    );
};
 
Calendar.propTypes = {
  dashboard: PropTypes.object.isRequired,
  deleteCalendar: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteCalendar },
  )(Calendar);

    
    
    
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