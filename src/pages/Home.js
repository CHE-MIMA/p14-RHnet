import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/App.css'
import DatePick from '../components/DatePick';
import Modal from '../components/Modal';

const Home = () => {
    // const navigate = useNavigate();
    const [openModal, setOpenModal] = useState();

    const closeModalOnClick = () => {
        setOpenModal(false);

    };
    return (
        <div>
            <body>
                <div className="title">
                    <h1>HRnet</h1>
                </div>
                <div className="container">
                    <NavLink className="main-nav" to="/listEmployees">View Current Employees</NavLink>
                    <h2>Create Employee</h2>


                    <form id="create-employee">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" name='firstName' />

                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" name='lastName' />
                        <label id="date-of-birth">Date of Birth</label>
                        <DatePick />

                        <label id="start-date">Start Date</label>
                        <DatePick />

                        <fieldset className="address">
                            <legend>Address</legend>

                            <label htmlFor="street">Street</label>
                            <input id="street" type="text" />

                            <label htmlFor="city">City</label>
                            <input id="city" type="text" />

                            <label htmlFor="state">State</label>
                            <select name="state" id="state"></select>

                            <label htmlFor="zip-code">Zip Code</label>
                            <input id="zip-code" type="number" />
                        </fieldset>

                        <label htmlFor="department">Department</label>

                        <select name="department" id="department">
                            <option>Sales</option>
                            <option>Marketing</option>
                            <option>Engineering</option>
                            <option>Human Resources</option>
                            <option>Legal</option>
                        </select>

                    </form>
                    <button onClick={() => setOpenModal(true)} >Save</button>
                    <Modal open={openModal} openModal={openModal}
                        closeModal={closeModalOnClick}

                    />
                </div>
            </body>
        </div>
    );
};
export default Home;

