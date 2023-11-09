import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import states from '../../Data/States.js'


function Home() {

    // On initialise un état local qui stocke les données du nouvel employé
    const [employeeData, setEmployeeData] = useState({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        startDate: '',
        department: '',
        street: '',
        city: '',
        state: '',
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
        <div className="container">
            <h1>HRnet</h1>
            <Link to={"/list"}>View Current Employees</Link>
            <h2>Create Employee</h2>
            <form className="formulaire" onSubmit={saveEmployee} id="create-employee">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="firstName" value={employeeData.firstName} onChange={handleInputChange} />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="lastName" value={employeeData.lastName} onChange={handleInputChange} />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <input type="date" id="date-of-birth" name="dateOfBirth" value={employeeData.dateOfBirth} onChange={handleInputChange} />

                <label htmlFor="start-date">Start Date</label>
                <input type="date" id="start-date" name="startDate" value={employeeData.startDate} onChange={handleInputChange} />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input type="text" id="street" name="street" value={employeeData.street} onChange={handleInputChange} />

                    <label htmlFor="city">City</label>
                    <input type="text" id="city" name="city" value={employeeData.city} onChange={handleInputChange} />

                    <label htmlFor="state">State</label>
                    <select id="state" name="state" value={employeeData.state} onChange={handleInputChange}>
                        <option value="">Select a state</option>
                        {states.map((state, index) => (
                            <option key={index} value={state.abbreviation}>
                                {state.name}
                            </option>
                        ))}
                    </select>

                    <label htmlFor="zip-code">Zip Code</label>
                    <input type="number" id="zip-code" name="zipCode" value={employeeData.zipCode} onChange={handleInputChange} />
                </fieldset>

                <label htmlFor="department">Department</label>
                <select name="department" id="department" value={employeeData.department} onChange={handleInputChange}>
                    <option>Sales</option>
                    <option>Marketing</option>
                    <option>Engineering</option>
                    <option>Human Resources</option>
                    <option>Legal</option>
                </select>

                <button type="submit">Save</button>
            </form>

            {showModal && ( 
                <div id="confirmation" className="modal">
                    <div className="close" onClick={closeModal}>Close</div>
                    <p>Employee Created!</p>
                </div>
            )}           
        </div>
    );
}

export default Home;
