import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// I want the user to be able to pick any time rather than set time.
// import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteJournal } from '../../actions/dashboard';
import AddJournal from '../dashboard-forms/addJournal';

export const Journal = ({ journal, deleteJournal }) => {
    const journalForm = journal.map(jour => (
      <div key={jour._id}>
        <div>{jour.date}</div>
        <div>{jour.time}</div> 
        <div>{jour.activity}</div>
        <div>{jour.location}</div>
        <div>{jour.choice1}</div>
        <div>{jour.choice2}</div>
        <div>{jour.contact}</div>
        <div>{jour.notes}</div>
        <div><button onClick={() => deleteJournal(jour._id)} className="btn btn-dark">Delete</button></div>
      </div>
    ));
    return (
      <Fragment>
        <div className="text-center">
          <h2>Journal Entry</h2>
        </div>
        <AddJournal />

        <h1>ENTRIES</h1>
        {journalForm}
      </Fragment>
    );
};
 
Journal.propTypes = {
  journal: PropTypes.array.isRequired,
  deleteJournal: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteJournal },
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