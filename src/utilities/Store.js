import { configureStore } from '@reduxjs/toolkit'; 
import employeeReducer from './Slice'; // Import du reducer défini dans le fichier Slice.js


// Création du store en utilisant la fonction configureStore de Redux Toolkit
export const store = configureStore({
    reducer: {
        employees: employeeReducer,
    }
});