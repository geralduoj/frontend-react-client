import React, { useState, useEffect } from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddGridSquare from '../components/AddGridSquare';
import DataGrids from '../components/DataGrids';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import Button from '@material-ui/core/Button';

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
    formControl: {
      margin: theme.spacing(13),
      minWidth: '50%',
    },
    actionbox: {
        marginTop: theme.spacing(13),
        //backgroundColor: theme.palette.secondary.main,
      },
  }));


export default function StudentByCourse() {
    const classes = useStyles();
    const apiUrl = "http://localhost:3000/api/courses";
    const apiUrlSearch = "http://localhost:3000/api/students-by-courses";
    const [courseCode, setCourseCode] = useState('');
    const [data, setData] = useState([]);
    const [students, setStudents] = useState([]);
    let studentSet = []
    const searchData = { auth: { courseCode } }
    
    

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
              console.log(courseCode)
              
              
            //}
          }).catch((error) => {
            console.log('error in fetchData:', error)
          });
          //rowsArray(data);
      };
      //
        getCourses();
        
    }, []);

    const onChange = (e) => {
      e.persist();
      setCourseCode(e.target.value)

    }

    const getStudents = async () => {
      await axios.post(apiUrlSearch,searchData)
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
    

  return (
    <React.Fragment>
        <div style={{ margin:100 }}>
            <Typography variant="h2" color="textSecondary" align="center">STUDENTS BY COURSES</Typography>
            <form noValidate>
              <FormControl className={classes.formControl}>
                          <InputLabel id="demo-simple-select-label">Select Course</InputLabel>
                          <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          onChange={onChange}
                          name="courseCode"
                        >
                          {data.map((row) => (
                            <MenuItem value={row.courseCode}>{row.courseCode}</MenuItem>
                          ))}
                          </Select>
                </FormControl>
                <Button
                          //type="submit"
                          fullWidth
                          variant="contained"
                          color="primary"
                          onClick={getStudents}
                      >
                          Search
                      </Button>
            </form>
              
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