import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// I want the user to be able to pick any time rather than set time.
// import moment from 'moment';
import { connect } from 'react-redux';
import { deleteCalendar } from '../../actions/dashboard';
import CalendarToast from 'tui-calendar'
import "tui-calendar/dist/tui-calendar.css";
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

export const Calendar = ({ calendar, deleteCalendar }) => {
    // TOAST UI
    const calendarUI = new CalendarToast('#calendar', {
      defaultView: 'month',
      taskView: true,
      template: {
        monthDayname: function(dayname) {
          return '<span class="calendar-week-dayname-name">' + dayname.label + '</span>';
        }
      }
    })
    console.log(calendarUI)
    // This is the calendar entry form that should eitehr pop up or you can input
    const calendarEntries = calendar.map(cal => (
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
        {/* <div id="calendar"></div> */}
        {/* <div id="calendar"> */}
          {/* {weekdayshortname} */}
          {/* {calendarUI} */}
          {/* <div id="calendar"></div> */}
          {/* {calendarContainer} */}
        {/* </div> */}
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

      </Fragment>
    );
};
 
Calendar.propTypes = {
  calendar: PropTypes.array.isRequired,
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