import React from 'react';
import PropTypes from 'prop-types';
// I want the user to be able to pick any time rather than set time.
// import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteJournal } from '../../actions/dashboard';
// import AddJournal from '../dashboard-forms/addJournal';
      
const JournalEntries = ({ dashboard, deleteJournal }) => {
    
  // When getting the journal page it works. When you reffresh it crashes. Is this a state issue that its not saving?
    const journalForm = dashboard.journal.map(jour => {
      // this crashes if empty/null
      if(dashboard !== null && dashboard.journal.length > 0) {
        return (
          <div key={jour._id}>
              <div id="journal_form">
                  <h5 id="form_holder">Date/Time: </h5>
                  <div className="row">
                      <div className="col-md-6 col-sm-12 mb-1">
                        <div>{jour.date}</div>
                      </div>
                      <div className="col-md-6 col-sm-12 mb-1">
                        <div>{jour.time}</div>
                      </div>
                  </div>
                  <h5 id="form_holder">Activity/Location: </h5>
                  <div className="row">
                      <div className="col-lg-6 col-md-6 mb-1">
                        <div>{jour.activity}</div>
                      </div>
                      <div className="col-lg-6 col-md-6 mb-1">
                        <div>{jour.location}</div>
                      </div>
                  </div>
                      <h5 id="form_holder">Did you wear a mask: </h5>
                  <div className="row">
                      <div className="col-12 mb-1">
                        <div>{jour.choice1}</div>
                      </div>
                  </div>
                  <h5 id="form_holder">Did others wear a mask: </h5>
                  <div className="row">
                      <div className="col-12 mb-1">
                        <div>{jour.choice2}</div>
                      </div>
                  </div>
                  <h5 id="form_holder">Contact with COVID: </h5>
                  <div className="row">
                      <div className="col-12">
                        <div>{jour.contact}</div>
                      </div>
                  </div>
                  <h5 id="form_holder">Other notes: </h5>
                  <div className="row mb-1">
                      <div className="col-12">
                        <div>{jour.notes}</div>
                      </div>
                  </div>
                  <div className="text-center">
                    <button onClick={() => deleteJournal(jour._id)} className="btn btn-dark">Delete</button> 
                  </div>
              </div>
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

    