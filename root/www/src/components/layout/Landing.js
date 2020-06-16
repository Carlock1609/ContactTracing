import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <section className="container-fluid">
            <div className="buttons">
              <Link to="/register" className="btn btn-outline-dark">Sign Up</Link>
              <Link to="/login" className="btn btn-outline-light">Login</Link>
            </div>
        </section>
    )
};

export default Landing;