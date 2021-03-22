import React from 'react';
import { Link as ReactLink, withRouter} from "react-router-dom";
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from '../components/NavBar';
import AddGridSquare from '../components/AddGridSquare';

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


function Actions() {

  return (
    <React.Fragment>
        <AddGridSquare/>
    </React.Fragment>
  );
}

export default withRouter(Actions);