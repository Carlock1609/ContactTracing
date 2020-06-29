import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
    if(isAuthenticated) {
       return <Redirect to='/dashboard' />
    }


    return (
        <section className="container-fluid">
            <div className="buttons">
              <Link to="/register" className="btn btn-outline-dark">Sign Up</Link>
              <Link to="/login" className="btn btn-outline-dark">Login</Link>
            </div>
        </section>
    )
};

Landing.propTypes = {
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);