import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import Navbar from "../../components/navbar/Navbar.js";
import Lien from "../../components/Lien.js";
import Table from "../../components/table/Table";
import Pagination from "../../components/pagination/Pagination";
import PageSizeSelector from "../../components/pagination/PageSizeSelector"; 
import Filter from "../../components/filter/Filter";
import { sortData } from '../../components/sort/Sort';
import './employeeList.scss'; 

function EmployeeList() {

    // Utilisation du hook useSelector pour extraire les données d'employés du Redux store :
    const employees = useSelector((state) => state.employees);

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortColumn, setSortColumn] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');


    const filteredItems = employees.filter(item => {
        return Object.values(item).some(value =>
            value.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    const handleSort = (column) => {
        if (sortColumn === column) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column);
            setSortOrder('asc');
        }
    };

    const handleSearchChange = (value) => {
        setSearchTerm(value);
        setCurrentPage(1); 
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handlePageSizeChange = (pageSize) => {
        setItemsPerPage(pageSize);
        setCurrentPage(1);
    };


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const sortedItems = sortData(filteredItems, sortColumn, sortOrder);
    const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);


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
                <div className="employeeList_container-filter">
                    <PageSizeSelector onPageSizeChange={handlePageSizeChange} />
                    <Filter searchTerm={searchTerm} onSearchChange={handleSearchChange} />
                </div>    
                <Table columns={columns} data={currentItems} onSort={handleSort}/> 
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </div>   
        </div>
    );
}

export default EmployeeList;
