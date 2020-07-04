import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addJournal } from '../../actions/dashboard';
 
const AddJournal = ({ addJournal, history}) => {
    // hooks
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        activity: '',
        location: '',
        choice1: '',
        choice2: '',
        contact: '',
        notes: ''
    });
    
    const {
        date,
        time,
        activity,
        location,
        choice1,
        choice2,
        contact,
        notes
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <Fragment>
            <div className="container">
                <form
                    onSubmit={e => {
                    e.preventDefault();
                    addJournal(formData, history);
                    }}
                >
                    <div id="journal_form">
                        <h5 id="form_holder">Date/Time: </h5>
                        <div className="row">
                            <div className="col-md-6 col-sm-12 mb-1">
                                <input type="date" name="date" value={date} onChange={e => onChange(e)} />
                            </div>
                            <div className="col-md-6 col-sm-12 mb-1">
                                <input type="time" name="time" value={time} onChange={e => onChange(e)} />
                            </div>
                        </div>
                        <h5 id="form_holder">Activity/Location: </h5>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 mb-1">
                                <input type="text" name="activity" value={activity} onChange={e => onChange(e)} placeholder="Activity here..." />
                            </div>
                            <div className="col-lg-6 col-md-6 mb-1">
                                <input type="text" name="location" value={location} onChange={e => onChange(e)} placeholder="Location here..." />
                            </div>
                        </div>
                            <h5 id="form_holder">Did you wear a mask: </h5>
                        <div className="row">
                            <div className="col-12 mb-1">
                                <select name="choice1" value={choice1} onChange={e => onChange(e)} >
                                    <option value="wore_mask">Wore Mask</option>
                                    <option value="did_not">Did not wear Mask</option>
                                </select>
                            </div>
                        </div>
                        <h5 id="form_holder">Did others wear a mask: </h5>
                        <div className="row">
                            <div className="col-12 mb-1">
                                <select name="choice2" value={choice2} onChange={e => onChange(e)} >
                                    <option value="wore_mask">Wore Mask</option>
                                    <option value="did_not">Did not wear Mask</option>
                                </select>
                            </div>
                        </div>
                        <h5 id="form_holder">Contact with COVID: </h5>
                        <div className="row">
                            <div className="col-12">
                                <textarea type="text" name="contact" placeholder="Any contact with COVID here..." value={contact} onChange={e => onChange(e)} ></textarea>
                            </div>
                        </div>
                        <h5 id="form_holder">Other notes: </h5>
                        <div className="row mb-1">
                            <div className="col-12">
                                <textarea type="text" name="notes"  placeholder="Any notes here..." value={notes} onChange={e => onChange(e)} ></textarea>
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="btn btn-outline-dark" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </Fragment>
    )
};

AddJournal.propTypes = {
    addJournal: PropTypes.func.isRequired
};

export default connect(null, { addJournal })(withRouter(AddJournal));
