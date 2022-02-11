import React, {useState} from 'react';
import {Box,InputLabel,InputAdornment,OutlinedInput,IconButton} from '@mui/material';
import {AccountCircle,VisibilityOff,Visibility} from '@mui/icons-material'
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';

const Register = () => {
    const [username,setUsername] = useState('')
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  });
  const handleEmailChange = (e)=>{
    setUsername(e.target.value);
  }
  const handlePasswordChange = (e)=>{
    setValues(e.target.value);
  }

  const handleClickShowPassword = () => {
    setValues({
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(username){
        alert(`Hello ${username}`);
    }
    else{
        alert('Please Enter your Email First');
    }
  }
  
    return (
        <div className='main'>
            <form onSubmit={handleSubmit} className='main-form'>
                <div className="heading">
                    <h1>Register </h1>
                </div>
                {/* USERNAME */}
                <Box className='box'>
                    <InputLabel htmlFor="input-with-icon-adornment">
                        First Name
                    </InputLabel>
                    <OutlinedInput
                        // value={}
                        type='text'
                        placeholder='Suman'
                        // onChange={}
                        startAdornment={
                            <InputAdornment position="start">
                            <AccountCircle />  
                            </InputAdornment>
                            }
                    />
                </Box>
                <Box className='box'>
                    <InputLabel htmlFor="input-with-icon-adornment">
                        Last Name
                    </InputLabel>
                    <OutlinedInput
                        // value={}
                        type='text'
                        placeholder='Bista'
                        // onChange={}
                        startAdornment={
                            <InputAdornment position="start">
                            <AccountCircle />  
                            </InputAdornment>
                            }
                    />
                </Box>
                {/* EMAIL */}
                <Box className='box'>
                    <InputLabel htmlFor="input-with-icon-adornment">
                        Email Address
                    </InputLabel>
                    <OutlinedInput
                        value={username}
                        type='email'
                        placeholder='abc@email.com'
                        onChange={handleEmailChange}
                        startAdornment={
                            <InputAdornment position="start">
                            <EmailIcon />  
                            </InputAdornment>
                            }
                    />
                </Box>
                {/* ADDRESS */}
                <Box className='box'>
                    <InputLabel htmlFor="input-with-icon-adornment">
                        Address
                    </InputLabel>
                    <OutlinedInput
                        // value={}
                        type='text'
                        placeholder='Bharatpur-12,Chitwan,Nepal'
                        // onChange={}
                        startAdornment={
                            <InputAdornment position="start">
                            <HomeIcon />  
                            </InputAdornment>
                            }
                    />
                </Box>
                {/* CONTACT */}
                <Box className='box'>
                    <InputLabel htmlFor="input-with-icon-adornment">
                        Phone Number
                    </InputLabel>
                    <OutlinedInput
                        // value={}
                        type='tel'
                        placeholder='Contact no.'
                        // onChange={}
                        startAdornment={
                            <InputAdornment position="start">
                            <PhoneIcon />  
                            </InputAdornment>
                            }
                    />
                </Box>
                {/* ZIP CODE */}
                <Box className='box'>
                    <InputLabel htmlFor="input-with-icon-adornment">
                        ZIP Code
                    </InputLabel>
                    <OutlinedInput
                        // value={}
                        type='number'
                        placeholder='44200'
                        // onChange={}
                        startAdornment={
                            <InputAdornment position="start">
                            <LocationOnIcon />  
                            </InputAdornment>
                            }
                    />
                </Box>
                {/* DOB */}
                <Box className='box'>
                    <InputLabel htmlFor="input-with-icon-adornment">
                        Date Of Birth
                    </InputLabel>
                    <OutlinedInput
                        // value={}
                        type='date'
                        // onChange={}
                    />
                </Box>
                {/* PASSWORD */}
                <Box className='box'>
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handlePasswordChange}
                        placeholder='Enter your Password'
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {values.showPassword ? <VisibilityOff /> : <Visibility />} 
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"  
                    />
                </Box>
                <input type='submit' value='Register'className='submit-btn'/>
                <div className="new-register">
                    Already have account?
                    <Link to='/' className='link-to'>Login</Link>
                </div>
            </form>
        </div>
    );
}

export default Register;
