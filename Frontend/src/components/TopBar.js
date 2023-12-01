import React from 'react';
import { Link } from 'react-router-dom';
import { Button, AppBar, Toolbar } from "@mui/material";
import './styles.css';
import soundsage from '../assets/soundsage-logo-solid.svg';

const TopBar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar variant="dense">
        <nav className='navigation'>
          <p>
            <img src={soundsage} className='logo' />
          </p>
          <div className='navigation_links'>
              <Link to='/' title='Link to Home Page'>
                <Button
                  variant="contained"
                  size="medium"
                  style={{ backgroundColor: "tertiary" }}>
                  Home
                </Button>
              </Link>
              <Link to='/profile' title='Link to Profile Page'>
                <Button
                  variant="contained"
                  size="medium">
                  Profile
                </Button>
              </Link>
              <Link to='/login' title='Log into Account'>
                <Button
                  variant="contained"
                  size="medium">
                  Login
                </Button>
              </Link>
              <Link to='/settings' title='Link to Settings'>
                <Button
                  variant="contained"
                  size="medium">
                  Settings
                </Button>
              </Link>
          </div>
        </nav>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar;