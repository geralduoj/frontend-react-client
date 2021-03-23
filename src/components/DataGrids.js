import React from 'react';
import { withRouter } from 'react-router-dom';
import { DataGrid } from "@material-ui/data-grid";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import axios from 'axios';


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
  table: {
    minWidth: 650,
  },
}));

  

  function DataGrids(props) {

    const classes = useStyles();
    
    const dropCourse = (id, cCode, cName, sec, sem) => {
      const course = { _id: id, courseCode: cCode, courseName: cName, section: sec, semester: sem };
      console.log(course)
      //
      const apiUrl = "http://localhost:3000/api/courses/" + id;
      axios.delete(apiUrl, course)
        .then((result) => {
          //setShowLoading(false);
          props.history.push('/actions')
        });
    };
    const updateCourse = (id, cCode, cName, sec, sem) => {
      const course = { _id: id, courseCode: cCode, courseName: cName, section: sec, semester: sem };

      console.log(course)
      //
      //const apiUrl = "http://localhost:3000/api/courses/" + id;
      props.history.push({
        pathname: '/update-course/' + course._id + '/' + course.courseCode + '/' + course.courseName + '/' + course.section + '/' + course.semester
      });
      //props.history.push('/update-course/' + cCode)
    };

  return (
    <React.Fragment>
      <Container component="main" maxWidth="md">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Course Code</TableCell>
              <TableCell align="right">Course name</TableCell>
              <TableCell align="right">Section</TableCell>
              <TableCell align="right">Semester</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows.map((row) => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  {row.courseCode}
                </TableCell>
                <TableCell align="right">{row.courseName}</TableCell>
                <TableCell align="right">{row.section}</TableCell>
                <TableCell align="right">{row.semester}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginLeft: 16 }}
                    onClick={() => { updateCourse(row._id,row.courseCode, row.courseName, row.section, row.semester) }}
                  >
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    style={{ marginLeft: 16 }}
                    onClick={() => { dropCourse(row._id,row.courseCode, row.courseName, row.section, row.semester) }}
                  >
                    DROP
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Container>




      
    </React.Fragment>
    
    
  );
}

export default withRouter(DataGrids);
