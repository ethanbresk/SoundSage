import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Box, Button, TextField, /*ThemeProvider, useTheme*/ } from "@mui/material";
import { useThemeContext, /*currTheme, darkTheme, lightTheme*/ } from "../components/themeswitch";
import { useTheme } from '@mui/system';
import { getUserData } from '../utilities/backend_integration.js';
import '../components/styles.css';
import useFetch from '../hooks/useFetch';
import BlogCollection from '../components/BlogCollection';
import { SearchBar } from '../components/searchbar';
import { getPosts } from '../utilities/backend_integration.js';

/* Home page (landing page) implementation. The 'blog-home' component of this
   code was influenced by template guides from a tutorial by NetNinja. */

const Home = () => {

  const [isPending, setIsPending] = useState(true);
  const [blogs, setBlogs] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    getUserData()
    .then(data => {
      setData(data);
    })
    getPosts(null)
    .then((res) => {
      setBlogs(res);
      setIsPending(false);
    })
  }, []);

  console.log(blogs)

  const theme = useTheme()

  //{error && <div>{error}</div>}
  return (
    <main>
      <div className='center'>
        <SearchBar></SearchBar>
      <div className="blog_home" style = {{ marginTop:20,paddingTop:9,paddingBottom:100,height:700,overflowY: 'auto' }}>
        {isPending && <div>Loading...</div>}
        {blogs && <BlogCollection blogs={blogs.blogs} title="SoundSage Blogs:" />}
      </div>
      </div>
      <nav>
        <Box
          position = "fixed"
          bottom = {0}
          width = "100%"
          style = {{ backgroundColor: theme.palette.secondary.main}}
          p={3}
        />
        {data && <createbutton>
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
        </createbutton>}
      </nav>
    </main>
  )
}

export default Home;