import React,{useState} from 'react';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import { Routes, Route } from "react-router-dom";
import {FormControlLabel,Switch} from '@mui/material'

function App() {
  const [mode, setMode] = useState('Dark');
  
  const handleMode = ()=>{
    if(mode === 'Light'){
      setMode('Dark');
    }
    else{
      setMode('Light');
    }
  }
  const handleBgMode = () =>{
    if (mode === 'Light'){
      return "bg-Dark"
    }
    else{
      return "bg-Light"
    }
  }
  console.log(handleBgMode())
  return (
      <div className='App'>
        <div className={`togglebg toggle-${handleBgMode()}`}>
        <FormControlLabel control={<Switch onChange={handleMode}/>} label={"Enable " + mode + " Mode"} />
        </div>     
        <Routes>
          <Route path="/" element={<Login mode={mode}/>}/>
          <Route path="register" element={<Register mode={mode}/>} />
        </Routes>
      </div>
  );
}

export default App;
