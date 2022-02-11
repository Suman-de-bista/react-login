import  React,{useState} from 'react';
import {Box,InputLabel,InputAdornment,OutlinedInput,IconButton} from '@mui/material';
import {VisibilityOff,Visibility} from '@mui/icons-material'
import EmailIcon from '@mui/icons-material/Email';
import {Link} from 'react-router-dom';


export default function Login(props) {
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
    alert(username);
  }

  return (
    <div className='main'>
      <form onSubmit={handleSubmit} className='main-login'>
        <h1>Login</h1>
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
                <EmailIcon  />  
            </InputAdornment>
          }
        />
        </Box>
        <Box className='box'>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            placeholder='Enter Password'
            onChange={handlePasswordChange}
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
        <input type='submit' value='Login' className='submit-btn'/>
        <div className="new-register">
          Not registered yet? 
          <Link to='/register' className='link-to'>Register</Link>
        </div>
        </form>
        
    </div>
  );
}
