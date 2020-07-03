import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
    const authLinks = (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">
                        <i className='fas fa-user mr-1' /> {' '}
                    DASHBOARD<span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/journal">JOURNAL</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="#">SEARCH</Link>
                </li>
                <li className="nav-item">
                    <Link onClick={logout} className="nav-link" to="#"> 
                    <i className='fas fa-sign-out-alt' /> {' '}
                        LOGOUT</Link>
                </li>
            </ul> 
        </div>
    );

    const guestLinks = (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
                <br/>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">ABOUT</Link>
                </li>
                <hr id="navHr"/>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">LOGIN</Link>
                </li>
                <hr id="navHr"/>
                <li className="nav-item">
                    <Link className="nav-link" to="/register">REGISTER</Link>
                </li>
                <br/>
            </ul>
        </div>
    );

    return (
        <div>
            {/* jumbotron */}
            <div className="jumbotron jumbotron-fluid mb-0">
                <div className="container text-center">
                    <h1 className="display-4">CONTACT TRACING HEALTH JOURNAL</h1>
                </div>
            </div>
            <nav className="navbar navbar-expand-sm">
                <button className="navbar-toggler navbar-light mx-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    <span id="toggle_icon">MENU</span>
                </button>
                {/* if not loading do this */}
                {/* USES TENARY OPERATOR - Kind of like 'OR' */}
                { !loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>) }
            </nav>
        </div>
    )
};

Navbar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    {
        logout
    }
)(Navbar);