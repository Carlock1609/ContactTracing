import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth'

const Login = ({ login, isAuthenticated }) => {
    // client-side js goes here
        
    // formData are the inputs
    // setFormData is the typing inside of the inputs
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    
    // Deconstructs formData so we can add it to the input's value
    const { email, password } = formData;
    
    // onChange allows you to grab the formData and apply the setFormData
    // [e.target.name] keeps it dynamic so you don't have to write name: - email: - password:
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault();
        login(email, password);
    };

    // Redirect if loggged in
    if(isAuthenticated) {
        return <Redirect to="/dashboard" />
    };

    return (
        <Fragment>
            <section className="container-fluid text-center">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Login</h5>
                        <form className="form" onSubmit={e => onSubmit(e)}>
                            <div className="form-group">
                                <input 
                                    type="email"
                                    name="email"
                                    value={email}
                                    placeholder="Email address..."
                                    onChange={e => onChange(e)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="password"
                                    name="password"
                                    minLength="6"
                                    value={password}
                                    placeholder="Password here..."
                                    onChange={e => onChange(e)}
                                />
                            </div>
                            <input type="submit" className="btn btn-outline-dark" value="Login"/>
                        </form>
                    </div>
                    <p className="my-1">
                        Don't have an account? <Link to="/register">Sign Up</Link>
                    </p>
                </div>
            </section>
        </Fragment>
    )
};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

// get the auth state
const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps,
    {
        login,
    }   
)(Login);