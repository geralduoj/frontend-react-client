import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import PostAddIcon from '@material-ui/icons/PostAdd';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as ReactLink} from "react-router-dom";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

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
  formControl: {
    margin: theme.spacing(1),
    minWidth: '100%',
  },
}));

export default function AddCourse() {
  const classes = useStyles();

  return (
    <React.Fragment>
        <Container component="main" maxWidth="sm">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <PostAddIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Add Course
                </Typography>
                <form className={classes.form} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                    <TextField
                        name="courseCode"
                        variant="outlined"
                        required
                        fullWidth
                        id="courseCode"
                        label="Course Code"
                        autoFocus
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        name="courseName"
                        variant="outlined"
                        required
                        fullWidth
                        id="courseName"
                        label="Course Name"
                        autoFocus
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="section"
                        type="number"
                        label="section"
                        name="section"
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-label">Semester</InputLabel>
                      <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                    >
                      <MenuItem value={"Winter"}>Winter</MenuItem>
                      <MenuItem value={"Fall"}>Fall</MenuItem>
                      <MenuItem value={"Summer"}>Summer</MenuItem>
                      </Select>
                    </FormControl>
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    ADD COURSE
                </Button>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    </React.Fragment>
    
    
  );
}