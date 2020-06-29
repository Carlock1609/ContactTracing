import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// I want the user to be able to pick any time rather than set time.
// import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteJournal } from '../../actions/dashboard';
import { withRouter } from 'react-router-dom';


export const JournalEntries = ({ journal, deleteJournal }) => {
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
          <h2>Journal ENTRIES</h2>
        </div>
        {journalForm}
      </Fragment>
    );
};
 
JournalEntries.propTypes = {
  journal: PropTypes.array.isRequired,
  deleteJournal: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteJournal },
  )(withRouter(JournalEntries));
