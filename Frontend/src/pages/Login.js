import React, { useState, useEffect } from 'react';
import { loginWithSpotifyClick, logoutClick, getUserData } from '../utilities/spotify_integration.js';
import { useTheme } from '@mui/system';
import { Box } from '@mui/material';


const Login = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const theme = useTheme()
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
        <h2>Your total Likes: {total_likes}</h2>
        <h2>Link to Spotify: <a href={spotify_url}>{spotify_url}</a></h2>
        <h2>Your profile pic (may be null)</h2>
        <img src={picture_url} alt="Profile" width="200" height="200"></img>
      </div>
    );
  }
  return (
    <div className='login'>
      <Box
        position = "fixed"
        bottom = {0}
        width = "100%"
        style = {{ backgroundColor: theme.palette.accentTwo.main}}
        p={3}
      />
      {data ? userDisplay(data) : <h1 className='page_header'>Login</h1>}
      {!data && !error && <button onClick={() => { loginWithSpotifyClick() }}>LOGIN</button>}
      <p/>
      {data && <button onClick={() => { logoutClick() }}>LOGOUT</button>}
      {error && <div>
        <p>There was an error logging you in:</p>
        <p>{error}</p>
        <button onClick={() => { loginWithSpotifyClick() }}>RETRY</button>
      </div>}
      <p/>

    </div>
  ) /* NOTE for later: I'm thinking we could have the "login" page
      instead just be a single button on the TopBar instead of a whole page.
      the button will say "Login" unless the user is already logged in, in which
      case it will instead say "Logout" and act accordingly. Do you have an idea
      what we'd do with the refreshTokenClick() instead? Feel free to write an answer
      appending this comment in your next commit if you'd like. */
}

export default Login;