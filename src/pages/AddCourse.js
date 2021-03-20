import React, { useState, useEffect } from 'react';
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
import { withRouter } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
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
  formControl: {
    margin: theme.spacing(1),
    minWidth: '100%',
  },
}));

function AddCourse(props) {
  const classes = useStyles();

  const [data, setData] = useState({});
  const [courseCode, setCourseCode] = useState('');
  const [courseName, setCourseName] = useState('');
  const [section, setSection] = useState('');
  const [semester, setSemester] = useState('');
  const [course, setCourse] = useState({ courseCode: '', courseName: '', section: '', semester:'', username: '' });
  
  console.log(semester)
  const username = props.match.params.username;
  const apiUrl = "http://localhost:3000/api/courses"

  const saveCourse = (e) => {
    //setShowLoading(true);
    e.preventDefault();
    const data = {courseCode: course.courseCode, courseName: course.courseName, section: course.section, semester: course.semester, username: username };
    //
    axios.post(apiUrl, data)
    .then((result) => {
        //setShowLoading(false);
        console.log('results from save course:',result.data)
        //props.history.push('/showarticle/' + result.data._id)

    });
};

  //console.log(apiUrl)

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
                        value={courseCode}
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
                      value={semester}
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

export default withRouter(AddCourse);