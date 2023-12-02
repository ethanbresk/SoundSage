import React, { useState, useEffect } from 'react';
import { loginWithSpotifyClick, logoutClick, refreshTokenClick, getUserData } from '../utilities/spotify_integration.js';
import { useTheme } from '@mui/system';
import { Box } from '@mui/material';


const Login = () => {
  const [data, setData] = useState(null);
  const theme = useTheme()
  useEffect(() => {
    getUserData()
      .then(data => {
        if (data.display_name) {
          setData(data);
          //console.log(data);
        }
        else {
          setData(null);
        }
      })
  }, []);
  return (
    <div className='login'>
      <Box
        position = "fixed"
        bottom = {0}
        width = "100%"
        style = {{ backgroundColor: theme.palette.accentTwo.main}}
        p={3}
      />
      <h1 className='page_header'>Login</h1>

      {data && <h1>Hello, {data.display_name}</h1>}
      <button onClick={() => { loginWithSpotifyClick() }}>LOGIN</button>
      <button onClick={() => { logoutClick() }}>LOGOUT</button>
      <button onClick={() => { refreshTokenClick() }}>REFRESH</button>

    </div>
  ) /* NOTE for later: I'm thinking we could have the "login" page
      instead just be a single button on the TopBar instead of a whole page.
      the button will say "Login" unless the user is already logged in, in which
      case it will instead say "Logout" and act accordingly. Do you have an idea
      what we'd do with the refreshTokenClick() instead? Feel free to write an answer
      appending this comment in your next commit if you'd like. */
}

export default Login;