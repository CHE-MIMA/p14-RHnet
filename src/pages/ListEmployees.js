import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/App.css'
const ListEmployees = () => {
    return (
        <div>
            <body>
                <div id="employee-div" className="container">
                    <h3>Current Employees</h3>
                    <table id="employee-table" className="display"></table>
                    <NavLink className="main-nav" to="/home">Home</NavLink>
                </div>
            </body>
        </div>
    );
};

export default ListEmployees;