import React, { useState } from 'react';
import Select from 'react-select';
import '../styles/App.css'
import { states } from '../states';
const SelectStates = ({ getState }) => {
    const colorStyles = {
        control: (styles) => ({ ...styles, borderColor: "rgb(98, 128, 0)" })
    }
    const [selectState, setSelectState] = useState(states[0]);
    // const handleChange = (selectedOption) => { console.log("handleChange", selectedOption) }
    function handleOnChange(e) {
        setSelectState(e);
        getState(e);
        console.log(e);
    }
    return (
        <div>
            <Select defaultInputValue="Alabama"
                options={states} onChange={handleOnChange}
                styles={colorStyles}
                value={selectState} />
        </div>
    );
};

export default SelectStates;