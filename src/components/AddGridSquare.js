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
    padding: theme.spacing(2),
    textAlign: 'center',
    color: "#ffffff",
    backgroundColor: "#3f51b5",
  },
  actionbox: {
    marginTop: theme.spacing(13),
    //backgroundColor: theme.palette.secondary.main,
  },
}));

export default function AddGridSquare() {
  const classes = useStyles();

  return (
    <React.Fragment>
        <Container component="main" maxWidth="xs">
                
            <CssBaseline />
                <Grid container className={classes.actionbox} spacing={3}>
                  <Grid item xs={12}>
                    <Paper elevation={5} className={classes.paper}>ADD COURSE</Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper elevation={5} className={classes.paper}>YOUR COURSES</Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper elevation={5} className={classes.paper}>LIST STUDENTS</Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper elevation={5} className={classes.paper}>ALL COURSES</Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper elevation={5} className={classes.paper}>STUDENTS BY COURSES</Paper>
                  </Grid>
                </Grid>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
    </React.Fragment>
  );
}