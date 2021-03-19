import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddGridSquare from '../components/AddGridSquare';
import DataGrids from '../components/DataGrids';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';

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

const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue("firstName") || ""} ${
          params.getValue("lastName") || ""
        }`
    }
  ];
  
  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 35 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 35 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 35 },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 35 }
  ];

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

  return (
    <React.Fragment>
        <div style={{ margin:100 }}>
            <Typography variant="h2" color="textSecondary" align="center">STUDENTS BY COURSES</Typography>
            <FormControl className={classes.formControl}>
                      <InputLabel id="demo-simple-select-label">Select Course</InputLabel>
                      <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                    >
                      <MenuItem value={"COMP 308"}>COMP 308</MenuItem>
                      <MenuItem value={"COMP 308"}>COMP 309</MenuItem>
                      <MenuItem value={"COMP 308"}>COMP 210</MenuItem>
                      </Select>
            </FormControl>
            <DataGrids rows={rows} columns={columns} />
        </div>
    </React.Fragment>
  );
}