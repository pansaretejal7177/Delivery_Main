import "./login.css"
import React,{ useRef, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {db} from '../firebaseConfig';
import {Grid, Paper, Typography,Button,TextField} from '@material-ui/core';
import { Alert } from 'react-bootstrap';
import { useAuth, AuthProvider } from '../context/AuthContext';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const {login} = useAuth(); 
  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e){
      e.preventDefault();
      try{
          setError('')
          setLoading(true)
          await login(emailRef.current.value, passwordRef.current.value);
          navigate('/');
          setError('logged in');
      }
      catch{
          setError('Failed to logged in');
      }
      setLoading(false);
  }
  return (
    <>
            <Grid className = "login_bg" style={{padding : '16vh 0'}}>
            {error && <Alert variant='danger'>{error}</Alert> }
                <Paper elevation = {10} style = {{padding : 15, height : '60vh', width :340 ,margin:'0 20vh'}}>
                    <Grid align='center'>
                        <img src="https://1757140519.rsc.cdn77.org/blog/wp-content/uploads/2019/02/0019_t_newspaper-club-logo_9.png" style={{height:'90px',marginBottom:'20px'}} />
                        <h3><strong>Sign In</strong></h3>
                    </Grid>
                    <form onSubmit={handleSubmit}>
                        <TextField label = 'Username or Email' placeholder ='Enter username or email' inputRef={emailRef} fullWidth required />
                        <TextField label = 'Password(should contain at least 6 char)' placeholder ='Enter password' type ='password'  inputRef={passwordRef} fullWidth required />
                        <Button type='Submit' disabled= {loading} color ='primary' style={{margin:'40px 0px'}} variant = 'contained' fullWidth>Sign In</Button>
                    </form>
                    
                  
                    <Typography>
                        <Link  to='/forgot-password' style={{textDecoration : "none"}}>
                            Forgot Password?
                        </Link>
                    </Typography>
                    {/*<Typography> Don't have an account ? 
                        <Link to='/signup' style={{textDecoration : "none"}}>
                            Sign Up
                        </Link>
                    </Typography>
                    */}
                </Paper>
            </Grid>
        </>
  )
}

export default Login;