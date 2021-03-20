import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './App.css';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import NavBar from './components/NavBar';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Actions from './pages/Actions';
import ListCourses from './pages/ListCourses';
import AddCourse from './pages/AddCourse';
import ListStudents from './pages/ListStudents';
import AllCourses from './pages/AllCourses';
import StudentByCourse from './pages/StudentByCourse';

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
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
}));


function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      
    <Router>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route exact path="/actions" component={Actions} />
      <Route render ={()=> < ListStudents />} exact path="/actions/:username" />
      <Route exact path="/my-courses" component={ListCourses} />
      <Route exact path="/add-course" component={AddCourse} />
      <Route render ={()=> < AddCourse />} exact path="/add-course/:username" />
      <Route exact path="/all-students" component={ListStudents} />
      <Route exact path="/all-courses" component={AllCourses} />
      <Route exact path="/student-by-course" component={StudentByCourse} />
    </Switch>
  </Router>
    </React.Fragment>
    
  );
}
//<Route render ={()=> < App />} path="/" />
export default App;
