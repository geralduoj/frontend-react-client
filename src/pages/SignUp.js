import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import clsx from 'clsx';
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as ReactLink} from "react-router-dom";
import { green } from '@material-ui/core/colors';
import axios from 'axios';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));


export default function SignUp() {
  const classes = useStyles();
  const apiUrl = "http://localhost:3000/";
  const [student, setStudent] = useState({ _id: '', firstName: '', lastName: '', 
                email: '',username: '',password: '',confirmpassword:'',address:'',city:'',phonenumber:'',program:'' });
  const [showLoading, setShowLoading] = useState(false);
  const onChange = (e) => {
    e.persist();
    setStudent({...student, [e.target.name]: e.target.value});
  }
  const saveStudent = (e) => {
  //setShowLoading(true);
  e.preventDefault();
  const data = { firstName: student.firstName, lastName: student.lastName, 
    email: student.email,username: student.username, password: student.password,address: student.address,city: student.city,phonenumber: student.phonenumber, program: student.program };
  axios.post(apiUrl, data)
    .then((result) => {
      //setShowLoading(false);
      //props.history.push('/show/' + result.data._id)
    });
    setStudent({ _id: '', firstName: '', lastName: '', 
    email: '',username: '',password: '',confirmpassword:'',address:'',city:'',phonenumber:'',program:'' });
};
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });
  const handleButtonClick = async () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      const saveStudent = (e) => {
        //setShowLoading(true);
        e.preventDefault();
        const data = { firstName: student.firstName, lastName: student.lastName, 
          email: student.email,username: student.username, password: student.password,address: student.address,city: student.city,phonenumber: student.phonenumber, program: student.program };
        axios.post(apiUrl, data)
          .then((result) => {
            //setShowLoading(false);
            //props.history.push('/show/' + result.data._id)
          });
      };
      timer.current = await window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
      setStudent({ _id: '', firstName: '', lastName: '', 
          email: '',username: '',password: '',confirmpassword:'',address:'',city:'',phonenumber:'',program:'' });
    }
  };

  return (
    <React.Fragment>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign up
                </Typography>
                <form onSubmit={saveStudent} className={classes.form} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="fname"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                        value={student.firstName} 
                        onChange={onChange}
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="lname"
                        value={student.lastName} 
                        onChange={onChange}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        value={student.email} 
                        onChange={onChange}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="lname"
                        value={student.username} 
                        onChange={onChange}
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={student.password} 
                        onChange={onChange}
                    />
                    </Grid><Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="confirmpassword"
                        label="Confirm Password"
                        type="password"
                        id="confirmpassword"
                        autoComplete="current-password"
                        value={student.confirmpassword} 
                        onChange={onChange}
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        name="address"
                        variant="outlined"
                        required
                        fullWidth
                        id="address"
                        label="Address"
                        autoFocus
                        value={student.address} 
                        onChange={onChange}
                    />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="city"
                        label="City"
                        name="city"
                        value={student.city} 
                        onChange={onChange}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="phonenumber"
                        label="Phone Number"
                        id="phonenumber"
                        value={student.phonenumber} 
                        onChange={onChange}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="program"
                        label="Program"
                        id="program"
                        value={student.program} 
                        onChange={onChange}
                    />
                    </Grid>
                </Grid>
                <div className={classes.root}>
                  <div className={classes.wrapper}>
                    <Fab
                      aria-label="save"
                      type="submit"
                      color="primary"
                      className={buttonClassname}
                      onClick={handleButtonClick}
                    >
                      {success ? <CheckIcon /> : <SaveIcon />}
                    </Fab>
                    {loading && <CircularProgress size={68} className={classes.fabProgress} />}
                  </div>
                  <div className={classes.wrapper}>
                    <Button
                      variant="contained"
                      type="submit"
                      color="primary"
                      fullWidth
                      className={buttonClassname}
                      disabled={loading}
                      onClick={handleButtonClick}
                    >
                      Create Account
                    </Button>
                    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                  </div>
              </div>
                <Grid container justify="flex-end">
                    <Grid item>
                    <Link component={ReactLink} to="/signin" variant="body2">
                        Already have an account? Sign in
                    </Link>
                    </Grid>
                </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    </React.Fragment>
    
    
  );
}