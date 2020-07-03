import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Landing = ({ isAuthenticated }) => {
    if(isAuthenticated) {
       return <Redirect to='/dashboard' />
    }


    return (
        <section className="container-fluid text-center">
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title">WELCOME</h2>
                        <Link to="/register" id="landing_btn" className="btn btn-outline-dark">Sign Up</Link>
                        <Link to="/login" id="landing_btn" className="btn btn-outline-dark">Login</Link>
                </div>
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