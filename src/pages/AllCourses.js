import React, { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddGridSquare from '../components/AddGridSquare';
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
 table: {
    minWidth: 650,
  },
}));


export default function AllCourses() {
  const classes = useStyles();

  const apiUrl = "http://localhost:3000/api/courses";
  const [data, setData] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      await axios.get(apiUrl)
        .then(result => {
          //console.log('result.data:',result.data)
          //check if the user has logged in
          //if(result.data.screen !== 'auth')
          //{
            
            //console.log('data in if:', result.data )
            setData(result.data);
            
          //}
        }).catch((error) => {
          console.log('error in fetchData:', error)
        });
        //rowsArray(data);
      };  
      getCourses();
  }, []);

  return (
    <React.Fragment>
        <div style={{ margin:100 }}>
            <Typography variant="h2" color="textSecondary" align="center">ALL COURSES</Typography>
            <Container component="main" maxWidth="md">
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Course Code</TableCell>
                      <TableCell align="right">Course name</TableCell>
                      <TableCell align="right">Section</TableCell>
                      <TableCell align="right">Semester</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                          {row.courseCode}
                        </TableCell>
                        <TableCell align="right">{row.courseName}</TableCell>
                        <TableCell align="right">{row.section}</TableCell>
                        <TableCell align="right">{row.semester}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Container>
        </div>
    </React.Fragment>
  );
}