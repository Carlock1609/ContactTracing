import React, { Fragment } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const Register = () => {
    // client-side js goes here



    return (
        <Fragment>
            <section className="container-fluid text-center">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Sign Up</h5>
                        <form>
                            <input 
                                type="text"
                                name="name"
                                value="#"
                                placeholder="Name here..."
                                required
                            />
                            <input 
                                type="email"
                                name="email"
                                value="#"
                                placeholder="Email address..."
                                required
                            />
                            <input 
                                type="password"
                                name="password"
                                minLength="6"
                                value="#"
                                placeholder="Password here..."
                            />
                            <input 
                                type="password2"
                                name="password2"
                                minLength="6"
                                value="#"
                                placeholder="Validate Password here"
                            />
                        </form>
                        <input href="#" className="btn btn-outline-dark">Go!</input>
                    </div>
                    <p className="my-1">
                        Don't have an account? <Link to="/register">Sign In</Link>
                    </p>
                </div>
            </section>
        </Fragment>
    )
}

export default Register;