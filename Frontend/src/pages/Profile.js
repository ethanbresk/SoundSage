import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/system';
import { getUserData } from '../utilities/backend_integration.js';
import { Box } from '@mui/material';

const Profile = () => {
  const theme = useTheme()
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    getUserData()
      .then(data => {
        console.log(data);
        setData(data);
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
      <div>
        <h1 className='page_header'>Hello, {username}!</h1>
        <div className='center'>
          <img src={picture_url} alt="Profile" width="150" height="150"
            style={{borderRadius: 20, alignItems: 'center'}}></img>
        </div>
        <div style={{padding: 165, color: theme.palette.text.main, textAlign: 'center'}}>
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
      {data ? userDisplay(data) : <h1>Login to Display Info</h1>}
    </div>
  )
}

export default Profile;