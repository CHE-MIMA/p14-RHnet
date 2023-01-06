import React from 'react';
import logo from '../assets/logoHrnet.png'
import '../styles/App.css'
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
        </div>
    );
};

export default Header;