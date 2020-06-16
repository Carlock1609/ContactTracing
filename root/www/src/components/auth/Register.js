import React, { Fragment, useState } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



const Register = () => {
    // client-side js goes here
    
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
            console.log('Passwords do not match')
        } else {
            console.log('Success!')
        }
    };

    return (
        <Fragment>
            <section className="container-fluid text-center">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Sign Up</h5>
                        <form onSubmit={e => onSubmit(3)}>
                            <input 
                                type="text"
                                name="name"
                                value={name}
                                placeholder="Name here..."
                                onChange={e => onChange(e)}
                                required
                            />
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
                            <input 
                                type="password2"
                                name="password2"
                                minLength="6"
                                value={password2}
                                placeholder="Validate Password here"
                                onChange={e => onChange(e)}
                            />
                        </form>
                        <input href="#" className="btn btn-outline-dark" value='Register'>Go!</input>
                    </div>
                    <p className="my-1">
                        Already have an account? <Link to="/login">Sign in</Link>
                    </p>
                </div>
            </section>
        </Fragment>
    )
}

export default Register;