import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// I want the user to be able to pick any time rather than set time.
// import Moment from 'react-moment';
import { connect } from 'react-redux';


export const Journal = ({ journal }) => {
    const journals = journal.map(jour => (
      <tr key={jour._id}>
        <td>{jour.date}</td>
        <td>{jour.time}</td>
        <td>{jour.activity}</td>
        <td>{jour.location}</td>
        <td>{jour.choice1}</td>
        <td>{jour.choice2}</td>
        <td>{jour.contact}</td>
        <td>{jour.notes}</td>
        <td><button className="btn btn-dark">Delete</button></td>
      </tr>
    ));
    // console.log(calendar)
    return (
      <Fragment>
        <h2>Journal</h2>
        <table>
          <thead>
            <tr>
                <th>date</th>
                <th>time</th>
                <th>activity</th>
                <th>location</th>
                <th>choice1</th>
                <th>choice2</th>
                <th>contact</th>
                <th>notes</th>
            </tr>
          </thead>
          <tbody>{journals}</tbody>
        </table>
      </Fragment>
    );
};
 
Journal.propTypes = {
  journal: PropTypes.array.isRequired
};

export default connect(
  null,
  {},
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