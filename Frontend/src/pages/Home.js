import React, { /*useState*/ } from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, Button, TextField, /*ThemeProvider, useTheme*/ } from "@mui/material";
import { useThemeContext, /*currTheme, darkTheme, lightTheme*/ } from "../components/themeswitch";
import { useTheme } from '@mui/system';
import '../components/styles.css';
import useFetch from '../hooks/useFetch';
import BlogCollection from '../components/BlogCollection';
import { SearchBar } from '../components/searchbar';

/* Home page (landing page) implementation. The 'blog-home' component of this
   code was influenced by template guides from a tutorial by NetNinja. */

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8080/getPosts', {
    mode: 'no-cors',
  });

  const theme = useTheme()

  return (
    <main>
      <h1 className='page_header'>SoundSage</h1>
      <div className='center'>
        <SearchBar></SearchBar>
      <div className="blog_home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {blogs && <BlogCollection blogs={blogs.blogs} title="SoundSage Blogs:" />}
      </div>
      </div>
      <nav>
        <Box
          position = "fixed"
          bottom = {0}
          width = "100%"
          style = {{ backgroundColor: theme.palette.accentTwo.main}}
          p={3}
        />
        <createbutton>
          <Link to='/create' title='Link to New Blog Page'>
            <Button
              style={{
                borderRadius: '50%',
                width: '60px',
                height: '60px',
                fontSize: '20px',
                backgroundColor: theme.palette.accentOne.main,
              }}
              variant="contained"
              size="medium">
              +
            </Button>
          </Link>
        </createbutton>
      </nav>
    </main>
  )
}

export default Home;