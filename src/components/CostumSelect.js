import React from 'react';
import Select from 'react-select';
import '../styles/App.css'
const CostumSelect = (props) => {
    const options = [
        { label: "Sales", value: "Sales" },
        { label: "Marketing", value: "Marketing" },
        { label: "Engineering", value: "Engineering" },
        { label: "Human Resources", value: "Human Resources" },
        { label: "Legal", value: "Legal" },

    ]
    return (
        <div>
            <Select defaultInputValue="Sales" options={options} />
        </div>
    );
};

export default CostumSelect;