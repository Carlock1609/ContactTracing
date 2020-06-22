import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// I want the user to be able to pick any time rather than set time.
// import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteCalendar } from '../../actions/dashboard';


export const Calendar = ({ calendar, deleteCalendar }) => {
    const calendars = calendar.map(cal => (
      <tr key={cal._id}>
        <td>{cal.date}</td>
        <td>{cal.time}</td>
        <td>{cal.choice}</td>
        <td>{cal.notes}</td>
        <td><button onClick={() => deleteCalendar(cal._id)} className="btn btn-dark">Delete</button></td>
      </tr>
    ));
    // console.log(calendar)
    return (
      <Fragment>
        <h2>Calendar</h2>
        <table>
          <thead>
            <tr>
                <th>date</th>
                <th>time</th>
                <th>choice</th>
                <th>notes</th>
            </tr>
          </thead>
          <tbody>{calendars}</tbody>
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