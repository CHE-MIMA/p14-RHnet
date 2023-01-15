import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/App.css'
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';
import Search from '../components/Search';
const ListEmployees = () => {
    const employee = useSelector((state) => state.employee);
    console.log(employee)

    const columns = [
        {
            name: "First Name",
            selector: (row) => row.firstName,
            sortable: true,
            reorder: true,
        },
        {
            name: "Last Name",
            selector: (row) => row.lastName,
            sortable: true,
            reorder: true,
        },
        {
            name: "Start Date",
            selector: (row) => row.startDate,
            sortable: true,
            reorder: true,
        },
        {
            name: "Date of Birth",
            selector: (row) => row.dateOfBirth,
            sortable: true,
            reorder: true,
        },
        // {
        //     name: "Department",
        //     selector: (row) => row.department,
        //     sortable: true,
        //     reorder: true,
        // },
        // {
        //     name: "Street",
        //     selector: (row) => row.street,
        //     sortable: true,
        //     reorder: true,
        // },
        {
            name: "City",
            selector: (row) => row.city,
            sortable: true,
            reorder: true,
        },
        {
            name: "State",
            selector: (row) => row.state,
            sortable: true,
            reorder: true,
        },
        {
            name: "Zip Code",
            selector: (row) => row.zipCode,
            sortable: true,
            reorder: true,
        },
    ];
    
  const [filterText, setFilterText] = useState("");
//   const filteredEmployee = employee.filter(
//     (item) =>
//       (item.firstName &&
//         item.firstName.toLowerCase().includes(filterText.toLowerCase())) ||
//       (item.lastName &&
//         item.lastName.toLowerCase().includes(filterText.toLowerCase())) ||
//       (item.dateOfBirth &&
//         item.dateOfBirth.toLowerCase().includes(filterText.toLowerCase())) ||
//       (item.startDate &&
//         item.startDate.toLowerCase().includes(filterText.toLowerCase())) ||
//       (item.street &&
//         item.street.toLowerCase().includes(filterText.toLowerCase())) ||
//       (item.city &&
//         item.city.toLowerCase().includes(filterText.toLowerCase())) ||
//     //   (item.state &&
//     //     item.state.toLowerCase().includes(filterText.toLowerCase())) ||
//       (item.zipCode && item.zipCode.includes(filterText))
//     //   (item.department &&
//     //     item.department.toLowerCase().includes(filterText.toLowerCase()))
//   );
    return (
        <div>
            <Header />
        <div id="employee-div" className="container">
                <h1 className='titleEm'>Current Employees</h1><br />
               <Search onfilter={(e) => setFilterText(e.target.value)} filterText={filterText}/>
        </div>

        <div className="datatable-container">
        <DataTable
          columns={columns}
          data= {employee}
          pagination
        />
      </div>
      <NavLink className="main-nav" to="/home">Home</NavLink>
        </div>
    );
};

export default ListEmployees;