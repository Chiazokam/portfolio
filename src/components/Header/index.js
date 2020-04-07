import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from '../../images/logo.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className='header'>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img src={logo} alt='chiazokam' />
          </Typography>
          <Button className='nav-text' color="inherit">Resume</Button>
          <Button className='nav-text' color="inherit">Projects</Button>
          <Button className='nav-text' color="inherit">Articles</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
