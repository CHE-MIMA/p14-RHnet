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
// const DatePick = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   let date = new Date();
//   //  const years = range(1950, getYear(date) + 1, 1);

//   // let day = getDate();
//   // let month = getMonth() + 1;
//   let years = [date.getFullYear()]

//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   return (
//     <DatePicker
//       renderCustomHeader={({
//         date,

//         changeYear,
//         changeMonth,
//         decreaseMonth,
//         increaseMonth,

//         prevMonthButtonDisabled,
//         nextMonthButtonDisabled,
//       }) => (
//         <div
//           style={{
//             margin: 10,
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
//           <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
//             {"<"}
//           </button>


//           <select
//             value={months[(date)]}
//             onChange={({ target: { value } }) =>
//               changeMonth(months.indexOf(value))
//             }
//           >
//             {months.map((option) => (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//           <select
//             value={years[(date)]}
//             onChange={({ target: { value } }) => changeYear(value)}
//           >
//             {years.map((option) => (
//               <option key={option} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>

//           <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
//             {">"}
//           </button>
//         </div>
//       )}
//       selected={startDate}
//       onChange={(date) => setStartDate(date)}
//     />
//   );
// };
// export default DatePick