import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/App.css'
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';
import Search from '../components/Search';
const ListEmployees = () => {
    const employee = useSelector((state) => state.employee);
    // console.log(employee)
    const [filterText, setFilterText] = useState("");
  const searchedEmployee = employee.filter(
    (item) =>
      (item.firstName.toLowerCase().includes(filterText.toLowerCase())) ||
      ( item.lastName.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.dateOfBirth.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.startDate.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.street.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.city.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.state.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.zipCode.includes(filterText)) ||
      (item.department.toLowerCase().includes(filterText.toLowerCase()))
  );

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
        {
            name: "Department",
            selector: (row) => row.department,
            sortable: true,
            reorder: true,
        },
        {
            name: "Street",
            selector: (row) => row.street,
            sortable: true,
            reorder: true,
        },
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
          data= {searchedEmployee}
          pagination
        />
      </div>
      <NavLink className="main-nav" to="/home">Home</NavLink>
        </div>
    );
};

export default ListEmployees;