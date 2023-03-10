import React from 'react';
import Header from '../components/Header';
import { NavLink } from 'react-router-dom';
const Error = () => {
    return (
        <div>
             <Header />
             <div className="title">
                <h1>HRnet</h1>
            </div>
             <p className='ErrorP'> Hoops! the page you are looking for does not exist</p>
             <p className='ErrorLink'>back to home page</p>
             <NavLink className="main-nav" to="/">Home</NavLink>
        </div>
    );
};

export default Error;