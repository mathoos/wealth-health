import { createSlice } from '@reduxjs/toolkit';

// On créé un slice du store qui contient le reducer et les actions associées
const employee = createSlice({
    name: 'employee', // Nom du slice pour générer automatiquement le nom de l'action et du reducer
    initialState: [], // État initial du slice ->  un tableau vide ([])
    reducers: {
        addEmployee: (state, action) => {
            state.push(action.payload);
        },
    },
});

export const { addEmployee } = employee.actions;
export default employee.reducer;