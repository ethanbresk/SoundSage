import React from 'react';
import { Link } from 'react-router-dom';
import { Button,AppBar,Toolbar } from "@mui/material";
import SiteTheme from '../components/Palette';
import '../components/styles.css';

const Home = () => {
  return (
    <main className='home'>Home
    <nav>
    <createbutton>
      <Link to='/create' title='Link to New Blog Page'>
        <Button
          style ={{backgroundColor: SiteTheme.palette.dark.four}}
          variant="contained"
          size = "medium"> 
          +
        </Button>
      </Link>
    </createbutton>
    </nav>
    </main>
  )
}

export default Home;