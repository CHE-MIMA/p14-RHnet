import React, { useState } from 'react';
import Select from 'react-select';
import '../styles/App.css'
import { departments } from "../departments"
const DepartmentSelect = ({ getDepartment }) => {
    const options = departments
    const colorStyles = {
        control: (styles) => ({ ...styles, borderColor: "rgb(98, 128, 0)" })
    }
    const [selectDepartment, setSelectDepartment] = useState(departments[0]);
    // const handleChange = (selectedOption) => { console.log("handleChange", selectedOption) }
    function handleOnChange(e) {
        setSelectDepartment(e);
        getDepartment(e);
        console.log(e);
    }
    return (

        <div>
            <Select defaultInputValue="Sales"
                options={options} onChange={handleOnChange}
                value={selectDepartment}
                styles={colorStyles} />
        </div>
    );
};

export default DepartmentSelect;