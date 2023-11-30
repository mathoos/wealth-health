import React from 'react';
import { useSelector } from 'react-redux';

import Navbar from "../../components/navbar/Navbar.js";
import Lien from "../../components/Lien.js";
import Table from "../../components/table/Table";
import './employeeList.scss'; 

function EmployeeList() {

    const employees = useSelector((state) => state.employees);

    const columns = [
        { key: 'firstName', label: 'First Name' },
        { key: 'lastName', label: 'Last Name' },
        { key: 'startDate', label: 'Start Date' },
        { key: 'department', label: 'Department' },
        { key: 'dateOfBirth', label: 'Date of Birth' },
        { key: 'street', label: 'Street' },
        { key: 'city', label: 'City' },
        { key: 'state', label: 'State' },
        { key: 'zipCode', label: 'Zip Code' },
    ];
   
    return (
        <div className="employeeList">
            <Navbar>
                <Lien
                    href="/"
                    txt="Home"
                    customClass="navbar_link"
                />
            </Navbar>
            <div className="employeeList_container">
                <h2>Current Employees</h2>
                <Table columns={columns} data={employees}/> 
            </div>   
        </div>
    );
}

export default EmployeeList;
