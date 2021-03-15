import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link as ReactLink} from "react-router-dom";
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

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
    }
  }));

export default function NavBar(){
    const classes = useStyles();

    return(
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Lab 3
          </Typography>
          <nav>
            <Link component={ReactLink} to="/" variant="button" color="textPrimary" className={classes.link}>
              Home
            </Link>
            <Link component={ReactLink} to="/actions" variant="button" color="textPrimary" className={classes.link}>
              Actions
            </Link>
            <Link component={ReactLink} to="/signup" variant="button" color="textPrimary" className={classes.link}>
              Sign Up
            </Link>
          </nav>
          <Button component={ReactLink} to="/signin" color="primary" variant="outlined" className={classes.link}>
            Sign In
          </Button>
        </Toolbar>
      </AppBar>
    );
}