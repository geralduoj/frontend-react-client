import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link as ReactLink} from "react-router-dom";
import axios from 'axios';
import AddGridSquare from '../components/AddGridSquare';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Gerald & Shima. © '}
      <Link color="inherit" href="http://localhost:3000/">
        LAB 3
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export let user = 'ff';

export default function SignIn() {
  //state variable for the screen, admin or user
  const [screen, setScreen] = useState('auth');
  //store input field data, user name and password
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const apiUrl = "http://localhost:3000/signin";
  //send username and password to the server
  // for initial authentication
  const auth = async () => {
    console.log('calling auth')
    console.log(username)
    user = username
    try {
      //make a get request to /authenticate end-point on the server
      const loginData = { auth: { username, password } }
      //call api
      const res = await axios.post(apiUrl, loginData);
      console.log(loginData)
      console.log(res.data.screen)
      //process the response
      if (res.data.screen !== undefined) {
        setScreen(res.data.screen);
        console.log(res.data.screen);
      }
    } catch (e) { //print the error
      console.log(e);
    }
  
  };


  const classes = useStyles();

  return (
    <React.Fragment>
      {screen === 'auth'
      ? <div className={classes.paper}>
      <Avatar className={classes.avatar}>
      <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
      Sign in
      </Typography>
      <form className={classes.form} noValidate>
                  <TextField
                      variant="outlined"
                      margin="normal"
                      required="true"
                      fullWidth
                      id="username"
                      label="Username"
                      name="username"
                      onChange={e => setUsername(e.target.value)}
                      autoComplete="username"
                      autoFocus
                  />
                  <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      onChange={e => setPassword(e.target.value)}
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                  />
                  <FormControlLabel
                      fullWidth control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                  />
                  <Button
                      //type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={auth}
                      className={classes.submit}
                  >
                      Sign In
                  </Button>
                  <Grid container>
                      <Grid item>
                      <Link component={ReactLink} to="/signup" variant="body2">
                          {"Don't have an account? Sign Up"}
                      </Link>
                      </Grid>
                  </Grid>
      </form>
      </div> : <AddGridSquare user={username}/>
      }
        
    </React.Fragment>
  );
}