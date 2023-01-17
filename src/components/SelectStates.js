import React, { useState } from 'react';
import Select from 'react-select';
import '../styles/App.css'
import { states } from '../states';
const SelectStates = ({ getState }) => {
    const colorStyles = {
        control: (styles) => ({ ...styles, border: "solid rgb(98, 128, 0) 2px" })
    }
    const [selectState, setSelectState] = useState(states[0].value);
    // const handleChange = (selectedOption) => { console.log("handleChange", selectedOption) }
    function handleOnChange(e) {
        setSelectState(e);
        getState(e);
        console.log(e);
    }
    return (
        <div>
            <Select placeholder="Alabama"
                options={states} onChange={handleOnChange}
                styles={colorStyles}
                value={selectState} />
        </div>
    );
};

export default SelectStates;