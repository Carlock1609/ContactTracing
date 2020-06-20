import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// I want the user to be able to pick any time rather than set time.
// import Moment from 'react-moment';
import { connect } from 'react-redux';

const Calendar = ({ calendar }) => {
    const calendars = calendar.map(cal => (
        <tr key={cal._id}>
            <td>{cal.date}</td>
            <td>{cal.time}</td>
            <td>{cal.choice}</td>
            <td>{cal.notes}</td>
            <td><button className="btn btn-dark">Delete</button></td>
        </tr>
    ));

    return (
        <Fragment>
            <h2>Calendar</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Calendar</th>
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
    calendar: PropTypes.array.isRequired
};

export default Calendar;
