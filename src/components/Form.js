import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/App.css'
import DatePick from '../components/DatePick';
import Modal from '../components/Modal';
import CostumSelect from '../components/CostumSelect';
import SelectStates from '../components/SelectStates';
import { useNavigate } from 'react-router-dom';

const FormSave = () => {
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState();

    const closeModalOnClick = () => {
        setOpenModal(false);
        navigate("/");
    }
    return (
        <div>
            <div className="container">
                <NavLink className="main-nav" to="/listEmployees">View Current Employees</NavLink>
                <h2 className='titleEm'>Create Employee</h2>
                <form id="create-employee">
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" name='firstName' />

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" name='lastName' />
                    <label id="date-of-birth">Date of Birth</label>
                    <DatePick className='datepick' />

                    <label id="start-date">Start Date</label>
                    <DatePick className='datepick' />

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" />

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" />

                        <label htmlFor="state">State</label>
                        <SelectStates />

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" />
                    </fieldset>

                    <label htmlFor="department">Department</label>
                    <CostumSelect />


                </form>
                <button className='saveBtn' onClick={() => setOpenModal(true)}>Save</button>
                <Modal open={openModal} openModal={openModal}
                    closeModal={closeModalOnClick} />
            </div>

        </div>
    );
};

export default FormSave;