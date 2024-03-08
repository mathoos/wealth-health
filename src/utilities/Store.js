import { configureStore } from '@reduxjs/toolkit'; 
import employeeReducer from './Slice'; 


// Création du store en utilisant la fonction configureStore de Redux Toolkit
export const store = configureStore({
    reducer: {
        employees: employeeReducer,
    }
});