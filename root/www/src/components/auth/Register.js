import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
// This is for anchor tags or href/ links
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types'

// WHAT IS PROPS
const Register = ({ setAlert, register, isAuthenticated }) => {
    // formData are the inputs
    // setFormData is the typing inside of the inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });
    
    // Deconstructs formData so we can add it to the input's value
    const { name, email, password, password2 } = formData;
    
    // onChange allows you to grab the formData and apply the setFormData
    // [e.target.name] keeps it dynamic so you don't have to write name: - email: - password:
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault();
        if(password !== password2) {
            // This will get passed in to are actions - and will be the msg
            // LOOK AT THE ALERT COMPONENT
            setAlert('Passwords do not match', 'danger');
        } else {
            register({ name, email, password });
        }
    };

      // Redirect if loggged in
    if(isAuthenticated) {
        return <Redirect to="/dashboard" />
    };

    return (
        <Fragment>
            <section className="container text-center">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Sign Up</h5>
                        <form className="form" onSubmit={e => onSubmit(e)}>
                            <div className="form-group">
                                <input 
                                    type="text"
                                    name="name"
                                    value={name}
                                    placeholder="Name here..."
                                    onChange={e => onChange(e)}
                                    required
                                />
                            </div>
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
                            <div className="form-group">
                                <input 
                                    type="password"
                                    name="password2"
                                    minLength="6"
                                    value={password2}
                                    placeholder="Password again..."
                                    onChange={e => onChange(e)}
                                />
                            </div>
                            <input type="submit" className="btn btn-outline-dark" value="Register"/>
                        </form>
                    </div>
                    <p className="my-1">
                        Already have an account? <Link to="/login">Sign In</Link>
                    </p>
                </div>
                <hr className="mt-4"/>
            </section>
        </Fragment>
    )
};

Register.protoTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};

// get the auth state
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(
    mapStateToProps, 
    { setAlert, register }
)(Register);