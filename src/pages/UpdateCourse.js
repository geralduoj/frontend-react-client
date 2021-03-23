import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import UpdateSharpIcon from '@material-ui/icons/UpdateSharp';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { withRouter } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import axios from 'axios';
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function UpdateCourse(props) {
  const classes = useStyles();

  const [data, setData] = useState({});
  const [open, setOpen] = React.useState(false);
  const [courseCode, setCourseCode] = useState('');
  const [courseName, setCourseName] = useState('');
  const [section, setSection] = useState('');
  const [semester, setSemester] = useState('');
  const [course, setCourse] = useState({ courseCode: '', courseName: '', section: '', semester:'', username: '' });
  
  console.log(semester)

  const courseIDUpdate = props.match.params.courseid;
  const courseCodeUpdate = props.match.params.coursecode
  const courseNameUpdate = props.match.params.coursename;
  const courseSectionUpdate = props.match.params.section;
  const courseSemesterUpdate = props.match.params.semester;
  const apiUrl = "http://localhost:3000/api/courses/" + courseIDUpdate
  console.log('lala - '+ courseIDUpdate)

  //setCourseCode(courseCodeUpdate);

  const updateCourse = (e) => {
    //setShowLoading(true);
    e.preventDefault();
    const data = {courseCode: courseCode, courseName: courseName, section: section, semester: semester };
    console.log(data)
    
    axios.put(apiUrl, data)
    .then((result) => {
        //setShowLoading(false);
        setOpen(true);
        console.log('results from save course:',result.data)
        
        props.history.push('/my-courses')

    });
    
  };

const handleClose = (event, reason) => {
  if (reason === "clickaway") {
    return;
  }

  setOpen(false);
};

//runs when user enters a field
const onChange = (e) => {
    e.persist();
    
    //setCourseCode(props.match.params.coursecode)
    setCourseCode(e.target.value);
  }

  //console.log(apiUrl)

  return (
    <React.Fragment>
        <Container component="main" maxWidth="sm">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <UpdateSharpIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Update Course
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
                        value={courseCodeUpdate}
                        onChange={e => setCourseCode(e.target.value)}
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
                        value={courseName}
                        onChange={e => setCourseName(e.target.value)}
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
                        value={section}
                        onChange={e => setSection(e.target.value)}
                    />
                    </Grid>
                    <Grid item xs={12}>
                    <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-label">Semester</InputLabel>
                      <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      onChange={e => setSemester(e.target.value)}
                      //value={semester}
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
                    onClick={updateCourse}
                    className={classes.submit}
                >
                    UPDATE COURSE
                </Button>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success">
                Your course has been added successfully!
              </Alert>
            </Snackbar>
        </Container>
    </React.Fragment>
    
    
  );
}

export default withRouter(UpdateCourse);