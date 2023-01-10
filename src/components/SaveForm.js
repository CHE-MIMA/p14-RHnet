import React, { useState } from 'react';
import DatePick from './DatePick';
import Modal from './Modal';
import CostumSelect from './CostumSelect';
import SelectStates from './SelectStates';
import '../styles/App.css'
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from "react-redux";
// import { addEmployee } from '../feature/employeeSlice';
import { NavLink } from 'react-router-dom';
const Saveform = () => {
    // const navigate = useNavigate();
    const [openModal, setOpenModal] = useState();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    // const [dateOfBirth, setDateOfBirth] = useState(new Date());
    // const [startDate, setStartDate] = useState(new Date());
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipcode] = useState("");
    // const dispatch = useDispatch();
    const navigate = useNavigate();

    const closeModalOnClick = () => {
        setOpenModal(false);
        navigate("/listEmployees");
    }


    // const saveData = (e) => {
    //     e.preventDefault();
    //     const employeeData = {
    //         firstName: firstName,
    //         lastName: lastName,
    //         // dateOfBirth: dateOfBirth,
    //         // startDate: startDate,
    //         street: street,
    //         city: city,
    //         zipCode: zipCode,
    //     };
    //     console.log(employeeData);
    //     // dispatch(addEmployee(employeeData));
    //     // setOpenModal(true);
    // };

    return (
        <div className="container">
            <NavLink className="main-nav" to="/listEmployees">View Current Employees</NavLink>
            <h2 className='titleEm'>Create Employee</h2>
            <form id="create-employee">
                {/* onSubmit={saveData} */}

                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name='firstName' onChange={(e) => setFirstName(e.target.value)}
                    value={firstName} />
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name='lastName'
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName} />
                <label id="date-of-birth">Date of Birth</label>
                <DatePick />
                {/* // onChange={(e) => setDateOfBirth(e.target.value)}
                    // value={dateOfBirth} /> */}

                <label id="start-date">Start Date</label>
                <DatePick />
                {/* onChange={(e) => setStartDate(e.target.value)}
                    value={startDate} /> */}

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text"
                        onChange={(e) => setStreet(e.target.value)}
                        value={street} />

                    <label htmlFor="city">City</label>
                    <input id="city" type="text"
                        onChange={(e) => setCity(e.target.value)}
                        value={city} />

                    <label htmlFor="state">State</label>
                    <SelectStates />

                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number"
                        onChange={(e) => setZipcode(e.target.value)}
                        value={zipCode} />
                </fieldset>

                <label htmlFor="department">Department</label>
                <CostumSelect />
            </form>
            <button type='submit' className='saveBtn' onClick={(e) => setOpenModal(true)} >Save</button>
            <Modal openModal={openModal}
                closeModal={closeModalOnClick} />
        </div>

    );
};

export default Saveform;