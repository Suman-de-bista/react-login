import React,{useState} from 'react';
import {FormControlLabel,Switch,Tabs,Tab,Box} from '@mui/material'

const Navbar = (props) => {
    const [value, setValue] = useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
        
    const handleBgMode = () =>{
        if (props.mode === 'Light'){
            return "bg-Dark"
        }
        else{
            return "bg-Light"
        }
    }
    return (
        <div>
            <Box className='nav-bar'>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
            className={`nav-tab nav-tab-${handleBgMode()}`}
          >
          <Tab value="one" label="Home" className={`nav nav-tab-${handleBgMode()}`}/>
          <Tab value="two" label="Login" className={`nav nav-tab-${handleBgMode()}`}/>
          <Tab value="three" label="Register" className={`nav nav-tab-${handleBgMode()}`}/>
          <FormControlLabel control={<Switch onChange={props.handleMode} className='togglebg'/>} label={"Enable " + props.mode + " Mode"} />
          </Tabs>
        </Box>
        </div>
    );
}

export default Navbar;
