import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import logo from '../../images/logo.svg';

const Footer = () => {

  return (
    <div className='footer'>
        <Container fixed>
            <div className='footer-text'>
                <p>Designed by </p> &nbsp; &nbsp; <img src={logo} alt='chiazokam' />
            </div>
        </Container>
    </div>
  );
}

export default Footer;
