import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField, ThemeProvider, useTheme } from "@mui/material";
import { useThemeContext, currTheme, darkTheme, lightTheme} from "../components/ThemeSwitch";
import '../components/styles.css';

const Home = () => {
  const { switchTheme } = useThemeContext();

  return (
    <main className='home'>Home
    <TextField 
    id="outlined-basic"
    label="Enter Text Here"
    variant="outlined"
    />
    <div>
      <Button
      onClick={switchTheme}>
        Switches Theme
      </Button>
    </div>
    <nav>
    <createbutton>
      <Link to='/create' title='Link to New Blog Page'>
        <Button
          style ={{
            backgroundColor: lightTheme.palette.primary.light,
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            fontSize: '20px',
          }}
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