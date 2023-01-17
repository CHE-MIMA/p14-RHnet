import React, { useState } from 'react';
import Select from 'react-select';
import '../styles/App.css'
import { departments } from "../departments"
const DepartmentSelect = ({ getDepartment }) => {
    const colorStyles = {
        control: (styles) => ({ ...styles, border: "solid rgb(98, 128, 0) 2px" })
    }
    const [selectDepartment, setSelectDepartment] = useState(departments[0].value);
    // const handleChange = (selectedOption) => { console.log("handleChange", selectedOption) }
    function handleOnChange(e) {
        setSelectDepartment(e);
        getDepartment(e);
        console.log(e);
    }
    return (

        <div>
            <Select
                options={departments} onChange={handleOnChange}
                value={selectDepartment}
                styles={colorStyles}
                placeholder="select departement" />
        </div>
    );
};

export default DepartmentSelect;