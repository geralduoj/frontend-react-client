import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import SignInForm from '../components/SignInForm';
import NavBar from '../components/NavBar';
import Paper from '@material-ui/core/Paper';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Link as ReactLink, withRouter} from "react-router-dom";

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
    marginTop: theme.spacing(13),
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    //backgroundColor: theme.palette.secondary.main,
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

function SignIn(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
        
            <Container component="main" maxWidth="xs">
                
            <CssBaseline />
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Paper elevation={5} className={classes.paper}>
                      <SignInForm/>
                    </Paper>
                  </Grid>
                </Grid>
            <Box mt={8}>
                <Copyright />
            </Box>
            </Container>
    </React.Fragment>
  );
}

export default withRouter(SignIn);