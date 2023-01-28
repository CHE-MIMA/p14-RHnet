import React from 'react';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import '../styles/App.css'
import 'react-datepicker/dist/react-datepicker.css'

const DatePickBirth = ({ getDateOfBirth }) => {
  const [dateBirth, setDateBirth] = useState(new Date());


  const handleDateChange = (e) => {
    setDateBirth(e);
    getDateOfBirth(e)
  }

  return (


    <DatePicker

      isClearable
      selected={dateBirth}
      onChange={(e) => handleDateChange(e)}
      showMonthDropdown
      showYearDropdown
      dateFormat="MM/dd/yyyy"
      dropdownMode="select"
    />
  );
};

export default DatePickBirth
