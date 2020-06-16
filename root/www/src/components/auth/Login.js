import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
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
        console.log('SUCCESS')
    };


    return (
        <Fragment>
            <section className="container-fluid text-center">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Login</h5>
                        <form onSubmit={e => onSubmit(3)}>
                            <input 
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Email address..."
                                onChange={e => onChange(e)}
                                required
                            />
                            <input 
                                type="password"
                                name="password"
                                minLength="6"
                                value={password}
                                placeholder="Password here..."
                                onChange={e => onChange(e)}
                            />
                        </form>
                        <input to="#" className="btn btn-outline-dark" value='Login'>Go!</input>
                    </div>
                    <p className="my-1">
                        Don't have an account? <Link to="/register">Sign Up</Link>
                    </p>
                </div>
            </section>
        </Fragment>
    )
}

export default Login;