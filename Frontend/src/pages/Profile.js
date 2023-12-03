import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/system';
import { getUserData } from '../utilities/backend_integration.js';
import { Box } from '@mui/material';
import { getPosts } from '../utilities/backend_integration.js';
import BlogCollection from '../components/BlogCollection';

const Profile = () => {
  const theme = useTheme()
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [blogs, setBlogs] = useState(0);
  useEffect(() => {
    getUserData()
      .then(data => {
        console.log(data);
        setData(data);
        console.log(data.spotify_id)
        getPosts(data.spotify_id)
        .then((res) => {
          console.log(res)
          setBlogs(res);
          console.log(blogs)
          setIsPending(false);
        })
        setError(null);
      })
      .catch(error => {
        setData(null);
        setError(error);
      })
  }, []);

  const userDisplay = (data) => {
    const { username, total_likes, spotify_url, picture_url } = data;
    return (
      <div style={{overflowX: 'hidden', overflowY: 'hidden'}}>
        <h1 className='page_header'>Hello, {username}!</h1>
        <div className='center'>
          <img src={picture_url} alt="Profile" width="115" height="115"
            style={{borderRadius: 1000, alignItems: 'center'}}></img>
        </div>
        <div style={{padding: 110, color: theme.palette.text.main, textAlign: 'center'}}>
          <h2>Total Likes: {total_likes}</h2>
          <h2><a href={spotify_url}>Your Spotify Page</a></h2>
        </div>
        </div>
    );
  }
  return (
    <div className='profile'>
      <Box
        position = "fixed"
        bottom = {0}
        width = "100%"
        style = {{ backgroundColor: theme.palette.secondary.main}}
        p={3}
      />
      {data ? userDisplay(data) : <h1 style={{textAlign: 'center'}}>Login to Display Your Info!</h1>}
      <div className="blog_home" style = {{ height:550,overflowY: 'auto' }}>
        {isPending && <div>Loading...</div>}
        {blogs && <BlogCollection blogs={blogs.blogs} title="Kirt Blogs:" />}
    </div>
    </div>
  )
}

export default Profile;