import React from 'react';
import Select from 'react-select';
import '../styles/App.css'
import { states } from '../states';
const SelectStates = (props) => {

    return (
        <div>
            <Select defaultInputValue="Alabama" options={states} />
        </div>
    );
};

export default SelectStates;