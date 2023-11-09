import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home';
import EmployeeList from './pages/EmployeeList/EmployeeList';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>      
        <Route path="/" element={<Home/>}/>
        <Route path="/list" element={<EmployeeList/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
