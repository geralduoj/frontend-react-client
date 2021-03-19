import React from 'react';
import { DataGrid } from "@material-ui/data-grid";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';


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
}));

export default function DataGrids(props) {
  return (
    <React.Fragment>
      <Container component="main" maxWidth="md">
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid rows={props.rows} columns={props.columns} pageSize={5} />
        </div>
      </Container>
    </React.Fragment>
    
    
  );
}
