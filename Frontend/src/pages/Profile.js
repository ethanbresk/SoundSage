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
      <div className='center' style={{ color: theme.palette.text.main }}>
        <h1 className='page_header'>Hello, {username}!</h1>
        <img src={picture_url} alt="Profile" width="100" height="100"
          style={{borderRadius: 20, alignItems: 'center'}}></img>
        <h2>Your total Likes: {total_likes}</h2>
        <h2>Link to Spotify: <a href={spotify_url}>{spotify_url}</a></h2>
        <h2>Your profile pic (may be null)</h2>
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