import React from 'react';
import { Link } from 'react-router-dom';
import { Button,AppBar,Toolbar } from "@mui/material";
import SiteTheme from './Palette';

const TopBar = () => {;
  return (
    <AppBar position="static" style={{backgroundColor:SiteTheme.palette.dark.one}}>
    <Toolbar variant="dense">
    <nav className='navigation'>
      <div className='navigation_links'>
        <Link to='/' title='Link to Home Page'>
        <Button
            style ={{backgroundColor: SiteTheme.palette.dark.four}}
            variant="contained"
            size = "medium"> 
            Home
            </Button>
        </Link>
        <Link to='/profile' title='Link to Profile Page'>
            <Button
            style ={{backgroundColor: SiteTheme.palette.dark.four}}
            variant="contained"
            size = "medium"> 
            Profile 
            </Button>
        </Link>
      </div>
    </nav>
    </Toolbar>
    </AppBar>
    )
}

export default TopBar;