import React,{useState} from 'react';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import { Routes, Route } from "react-router-dom";
import {FormControlLabel,Switch} from '@mui/material'


function App() {
  return (
      <div className='App'>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="register" element={<Register/>} />
        </Routes>
      </div>
  );
}

export default App;
