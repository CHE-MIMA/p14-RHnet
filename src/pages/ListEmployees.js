import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/App.css'
const ListEmployees = () => {
    return (
        <div>
            <body>
                <Header />
                <div id="employee-div" className="container">
                    <h1 className='titleEm'>Current Employees</h1>
                    <table id="employee-table" className="display"></table>
                    <NavLink className="main-nav" to="/home">Home</NavLink>
                </div>
            </body>
        </div>
    );
};

export default ListEmployees;