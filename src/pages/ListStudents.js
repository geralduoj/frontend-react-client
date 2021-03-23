import React, { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddGridSquare from '../components/AddGridSquare';
import DataGrids from '../components/DataGrids';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  table: {
     minWidth: 650,
   },
 }));


export default function ListStudents() {
  const classes = useStyles();
  const apiUrl = "http://localhost:3000/students";
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
            <Typography variant="h2" color="textSecondary" align="center">ALL STUDENTS</Typography>
            <Container component="main" maxWidth="md">
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>First Name</TableCell>
                      <TableCell align="right">Last Name</TableCell>
                      <TableCell align="right">Email</TableCell>
                      <TableCell align="right">Username</TableCell>
                      <TableCell align="right">Address</TableCell>
                      <TableCell align="right">City</TableCell>
                      <TableCell align="right">Program</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                          {row.firstName}
                        </TableCell>
                        <TableCell align="right">{row.lastName}</TableCell>
                        <TableCell align="right">{row.email}</TableCell>
                        <TableCell align="right">{row.username}</TableCell>
                        <TableCell align="right">{row.address}</TableCell>
                        <TableCell align="right">{row.city}</TableCell>
                        <TableCell align="right">{row.program}</TableCell>
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