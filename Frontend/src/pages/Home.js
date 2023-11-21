import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField, ThemeProvider, useTheme } from "@mui/material";
import { useThemeContext, currTheme, darkTheme, lightTheme} from "../components/themeswitch";
import '../components/styles.css';
import useFetch from '../hooks/useFetch';
import BlogCollection from '../components/BlogCollection';

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8080/blogs', {
    mode: 'no-cors',
  });
  const { switchTheme } = useThemeContext();

  return (
    <main className='home'>
      <h1 className='home_header'>SoundSage</h1>
      <TextField 
      id="outlined-basic"
      label="Enter Text Here"
      variant="outlined"
      />
      <div>
        <Button
        onClick={switchTheme}>
          Change Theme
        </Button>
      </div>
      <div className="blog_home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div> }
            { blogs && <BlogCollection blogs={blogs.blogs} title="All Blogs:" />
            }
        </div>
      <nav>
        <createbutton>
          <Link to='/create' title='Link to New Blog Page'>
            <Button
              style ={{
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