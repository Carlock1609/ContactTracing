import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    // client-side js goes here



    return (
        <Fragment>
            <section className="container-fluid text-center">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Login</h5>
                        <form>
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

export default Login;