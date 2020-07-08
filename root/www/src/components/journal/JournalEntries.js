import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// I want the user to be able to pick any time rather than set time.
// import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteJournal } from '../../actions/dashboard';
// import AddJournal from '../dashboard-forms/addJournal';
      
const JournalEntries = ({ dashboard, deleteJournal}) => {
    
  // When getting the journal page it works. When you reffresh it crashes. Is this a state issue that its not saving?
    const journalForm = dashboard.journal.map(jour => {
      // this crashes if empty/null
      if(dashboard !== null && dashboard.journal.length > 0) {
        return (
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
        );
      } else {
        return <div>No Entries</div>
      }
      });

    return (
      <div>{journalForm}</div>
    );
};
 
JournalEntries.propTypes = {
  dashboard: PropTypes.object.isRequired,
  // deleteJournal: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteJournal },
  )(JournalEntries);

    