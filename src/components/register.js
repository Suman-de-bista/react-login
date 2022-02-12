import React, {useState} from 'react';
import {Box,InputLabel,InputAdornment,OutlinedInput,IconButton} from '@mui/material';
import {AccountCircle,VisibilityOff,Visibility} from '@mui/icons-material'
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from 'react-router-dom';

const Register = (props) => {
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
  const handleBgMode = () =>{
    if (props.mode === 'Light'){
      return "bg-Dark"
    }
    else{
      return "bg-Light"
    }
  }
  
    return (
        <div className={`main main-${handleBgMode()}`}>
            <form onSubmit={handleSubmit} className={`main-form main-login-${handleBgMode()}`}>
                <div className="heading">
                    <h1>Register </h1>
                </div>
                {/* USERNAME */}
                <Box className='box'>
                    <InputLabel className={`input-${handleBgMode()}`}>
                        First Name
                    </InputLabel>
                    <OutlinedInput
                        className={`input-box-${handleBgMode()}`}
                        // value={}
                        type='text'
                        placeholder='Suman'
                        // onChange={}
                        startAdornment={
                            <InputAdornment position="start">
                            <AccountCircle className={`input-${handleBgMode()}`}/>  
                            </InputAdornment>
                            }
                    />
                </Box>
                <Box className='box'>
                    <InputLabel className={`input-${handleBgMode()}`}>
                        Last Name
                    </InputLabel>
                    <OutlinedInput
                        className={`input-box-${handleBgMode()}`}
                        // value={}
                        type='text'
                        placeholder='Bista'
                        // onChange={}
                        startAdornment={
                            <InputAdornment position="start">
                            <AccountCircle className={`input-${handleBgMode()}`}/>  
                            </InputAdornment>
                            }
                    />
                </Box>
                {/* EMAIL */}
                <Box className='box'>
                    <InputLabel className={`input-${handleBgMode()}`}>
                        Email Address
                    </InputLabel>
                    <OutlinedInput
                        className={`input-box-${handleBgMode()}`}
                        value={username}
                        type='email'
                        placeholder='abc@email.com'
                        onChange={handleEmailChange}
                        startAdornment={
                            <InputAdornment position="start">
                            <EmailIcon className={`input-${handleBgMode()}`}/>  
                            </InputAdornment>
                            }
                    />
                </Box>
                {/* ADDRESS */}
                <Box className='box'>
                    <InputLabel className={`input-${handleBgMode()}`}>
                        Address
                    </InputLabel>
                    <OutlinedInput
                        className={`input-box-${handleBgMode()}`}
                        // value={}
                        type='text'
                        placeholder='Bharatpur-12,Chitwan,Nepal'
                        // onChange={}
                        startAdornment={
                            <InputAdornment position="start">
                            <HomeIcon className={`input-${handleBgMode()}`}/>  
                            </InputAdornment>
                            }
                    />
                </Box>
                {/* CONTACT */}
                <Box className='box'>
                    <InputLabel className={`input-${handleBgMode()}`}>
                        Phone Number
                    </InputLabel>
                    <OutlinedInput
                        className={`input-box-${handleBgMode()}`}
                        // value={}
                        type='tel'
                        placeholder='Contact no.'
                        // onChange={}
                        startAdornment={
                            <InputAdornment position="start">
                            <PhoneIcon className={`input-${handleBgMode()}`}/>  
                            </InputAdornment>
                            }
                    />
                </Box>
                {/* ZIP CODE */}
                <Box className='box'>
                    <InputLabel className={`input-${handleBgMode()}`}>
                        ZIP Code
                    </InputLabel>
                    <OutlinedInput
                        className={`input-box-${handleBgMode()}`}
                        // value={}
                        type='number'
                        placeholder='44200'
                        // onChange={}
                        startAdornment={
                            <InputAdornment position="start">
                            <LocationOnIcon className={`input-${handleBgMode()}`}/>  
                            </InputAdornment>
                            }
                    />
                </Box>
                {/* DOB */}
                <Box className='box'>
                    <InputLabel className={`input-${handleBgMode()}`}>
                        Date Of Birth
                    </InputLabel>
                    <OutlinedInput
                        className={`input-box-${handleBgMode()}`}
                        // value={}
                        type='date'
                        // onChange={}
                    />
                </Box>
                {/* PASSWORD */}
                <Box className='box'>
                    <InputLabel className={`input-${handleBgMode()}`}>Password</InputLabel>
                    <OutlinedInput
                        className={`input-box-${handleBgMode()}`}
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
                            className={`input-${handleBgMode()}`}
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
