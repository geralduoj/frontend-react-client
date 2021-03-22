import React from 'react';
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

export default function DataGrids(props) {
  const classes = useStyles();
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
              <TableRow key={row.id}>
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
                  >
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    style={{ marginLeft: 16 }}
                  >
                    Delete
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
