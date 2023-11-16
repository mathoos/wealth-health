import React from 'react'
import { useState } from 'react';

import Navbar from "../../components/navbar/Navbar.js";
import Select from "../../components/select/Select.js";
import DatePicker from "../../components/datePicker/DatePicker.js";
import Lien from "../../components/Lien.js";

import Modal from 'wealth-health-modal-lib';
import 'wealth-health-modal-lib/dist/index.css';
import '../../components/modal/modal.scss'; 

import states from '../../Data/States.js';
import departments from '../../Data/Departments.js';


import './home.scss'; 




function Home() {

    // On initialise un état local qui stocke les données du nouvel employé
    const [employeeData, setEmployeeData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        startDate: '',
        department: 'Sales',
        street: '',
        city: '',
        state: 'Alabama',
        zipCode: ''
    });

    // On initialise l'état local de la modale à false
    const [showModal, setShowModal] = useState(false);

    const closeModal = () => {
        setShowModal(false);
    };

    // On met à jour les nouvelles valeurs de chaque champ onChange
    const handleInputChange = (e) => {
        const { name, value } = e.target; // On extrait name et value où l'évènement onChange est déclenché
        setEmployeeData({ ...employeeData, [name]: value }); // On met à jour employeeData avec les nouvelles valeurs
    };

    const saveEmployee = (event) => {
        event.preventDefault();
     
        const employees = JSON.parse(localStorage.getItem('employees')) || []; // On récupère la liste des employés à partir du localStorage   
        employees.push(employeeData); // On ajoute les données de l'employé actuel
        localStorage.setItem('employees', JSON.stringify(employees)); // Et on sauvegarde la liste mise à jour dans le localStorage
        clearEmployeeData(); // On appelle la fonction clearEmployeeData qui réinitialise les données du formulaire à 0
        setShowModal(true); // On affiche la modale
    };


    const clearEmployeeData = () => {   
        const emptyEmployeeData = Object.fromEntries( // On transforme les paires clé-valeur en un objet
            // On extrait toutes les clés de l'objet employeeData sous forme d'un tableau contenant ces clés
            Object.keys(employeeData).map((key) => [key, '']) // avec .map() on parcourt le tableau des clés extraites et on retourne un tableau contenant cette clé et une chaîne vide ('')
        );   
        setEmployeeData(emptyEmployeeData); // On met à jour l'état employeeData avec le nouvel objet emptyEmployeeData
    };

    

    return (
        <div className="home">
            <Navbar>
                <Lien
                    href="/List"
                    txt="View current employee"
                    customClass="navbar_link"
                />
            </Navbar>
            <div className="home_container">
                <h2>Create Employee</h2>
                <form className="home_container-formulaire" onSubmit={saveEmployee} id="create-employee">
                    <fieldset className="fieldset">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" name="firstName" value={employeeData.firstName} onChange={handleInputChange} />
                    </fieldset>

                    <fieldset className="fieldset">
                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" name="lastName" value={employeeData.lastName} onChange={handleInputChange} />
                    </fieldset>

                    <fieldset className="fieldset">
                        <label htmlFor="date-of-birth">Date of Birth</label>
                        <DatePicker
                            name="dateOfBirth"
                            id="date-of-birth"
                            value={employeeData.dateOfBirth}
                            onChange={handleInputChange}
                        />
                    </fieldset>

                    <fieldset className="fieldset">
                        <label htmlFor="start-date">Start Date</label>
                        <DatePicker
                            name="start-date"
                            id="startDate"
                            value={employeeData.startDate}
                            onChange={handleInputChange}
                        />
                    </fieldset>
                   
                    <fieldset className="fieldset-adress">
                        <legend>Address</legend>

                        <fieldset className="fieldset">
                            <label htmlFor="street">Street</label>
                            <input type="text" id="street" name="street" value={employeeData.street} onChange={handleInputChange} />
                        </fieldset>

                        <fieldset className="fieldset">
                            <label htmlFor="city">City</label>
                            <input type="text" id="city" name="city" value={employeeData.city} onChange={handleInputChange} />
                        </fieldset>

                        <fieldset className="fieldset">
                            <label htmlFor="state">State</label>
                            <Select
                                name="state"
                                id="state"
                                value={employeeData.state}
                                onChange={handleInputChange}
                                options={states}
                                customClass="select"
                            />
                        </fieldset>

                        <fieldset className="fieldset">
                            <label htmlFor="zip-code">Zip Code</label>
                            <input type="number" id="zip-code" name="zipCode" value={employeeData.zipCode} onChange={handleInputChange} />
                        </fieldset>
                    </fieldset>

                    <fieldset className="fieldset">
                        <label htmlFor="department">Department</label>
                        <Select
                            name="department"
                            id="department"
                            value={employeeData.department}
                            onChange={handleInputChange}
                            options={departments}
                            customClass="select"
                        />
                    </fieldset>
                    <button type="submit">Save</button>
                </form>
            </div>         
            <Modal
                show={showModal} 
                handleClose={closeModal} 
                txt="Employee created" 
            />
        </div>
    );
}

export default Home;
