import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addJournal } from '../../actions/dashboard';
 
const Journal = ({ addJournal, history}) => {
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
            <h4>Journals here</h4>
            <form 
                onSubmit={e => {
                e.preventDefault();
                addJournal(formData, history);
                }}
            >
                <div className="row">
                    <div className="col-6">
                        <label for="date">Date: </label>
                        <input type="date" name="date" value={date} onChange={e => onChange(e)} />
                    </div>
                    <div className="col-6">
                        <label for="time">Time: </label>
                        <input type="time" name="time" value={time} onChange={e => onChange(e)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <label for="activity">Activity: </label>
                        <input type="text" name="activity" value={activity} onChange={e => onChange(e)} />
                    </div>
                    <div className="col-6">
                        <label for="location">Location: </label>
                        <input type="text" name="location" value={location} onChange={e => onChange(e)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label for="choice1">Did you wear a mask: </label>
                        <select name="choice1" value={choice1} onChange={e => onChange(e)} >
                            <option value="wore_mask">Wore Mask</option>
                            <option value="did_not">Did not wear Mask</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <label for="choice2">Did others wear a mask: </label>
                        <select name="choice2" value={choice2} onChange={e => onChange(e)} >
                            <option value="wore_mask">Wore Mask</option>
                            <option value="did_not">Did not wear Mask</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-2">
                    <div className="col">
                        <p className="mb-0">Contact: </p>
                        <textarea type="text" name="contact" placeholder="Any contact with COVID here..." value={contact} onChange={e => onChange(e)} ></textarea>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <p className="mb-0">Notes: </p>
                        <textarea type="text" name="notes"  placeholder="Any notes here..." value={notes} onChange={e => onChange(e)} ></textarea>
                    </div>
                </div>
                <button className="btn btn-outline-dark" type="submit">Submit</button>
            </form>
        </Fragment>
    )
};

addJournal.propTypes = {
    addJournal: PropTypes.func.isRequired
};

export default connect(null, { addJournal })(Journal);
