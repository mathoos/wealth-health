import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import EmployeeList from './pages/EmployeeList/EmployeeList';

function App() {
    
    return (
        <Router>
            <Routes>      
                <Route path="/" element={<Home/>}/>
                <Route path="/list" element={<EmployeeList/>}/>
            </Routes>
        </Router>
    );
}

export default App;