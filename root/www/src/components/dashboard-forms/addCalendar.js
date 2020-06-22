import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCalendar } from '../../actions/dashboard';
 
const AddCalendar = ({ addCalendar, history}) => {
    // hooks
    const [formData, setFormData] = useState({
        date: '',
        time: '',
        choice: '',
        notes: ''
    });
    
    const {
        date,
        time,
        choice,
        notes
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <Fragment>
            <h1>Add Calendar entry</h1>
            <form onSubmit={e => {
                e.preventDefault();
                addCalendar(formData, history);
            }}>
                <div className="row">
                    <div className="col-6">
                        <input type="date" name="date" value={date} onChange={e => onChange(e)} required />
                    </div>
                    <div className="col-6">
                        <input type="time" name="time" value={time} onChange={e => onChange(e)} required />
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <select name="choice" value={choice} onChange={e => onChange(e)} required >
                            <option value="wore_mask">Stayed Home</option>
                            <option value="did_not">Deliveries</option>
                            <option value="did_not">Symptoms</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <textarea type="text" name="notes"  value={notes} onChange={e => onChange(e)} required placeholder="Notes here..." ></textarea>
                    </div>
                </div>
                <button className="btn btn-outline-dark" type="submit">Submit</button>
            </form>
        </Fragment>
    )
};

AddCalendar.propTypes = {
    addCalendar: PropTypes.func.isRequired
};

export default connect(null, { addCalendar })(AddCalendar);
