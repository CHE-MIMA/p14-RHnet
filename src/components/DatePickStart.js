import React from 'react';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import '../styles/App.css'
import 'react-datepicker/dist/react-datepicker.css'

const DatePickStart = ({ getDateOfStart }) => {
    const [dateStart, setDateStart] = useState(new Date());


    const handleDateChange = (e) => {
        setDateStart(e);
        getDateOfStart(e)

    }

    return (


        <DatePicker

            isClearable
            selected={dateStart}
            onChange={(startDate) => handleDateChange(startDate)}
            showMonthDropdown
            showYearDropdown
            dateFormat="dd/MM/yyyy"
            dropdownMode="select"
        />
    );
};

export default DatePickStart