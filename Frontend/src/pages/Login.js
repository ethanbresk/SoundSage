import React from 'react';
import { loginWithSpotifyClick, logoutClick, refreshTokenClick } from '../utilities/spotify_integration.js';

const Login = () => {
  return (
    <div className='login'>Login
      <button onClick={() => { loginWithSpotifyClick() }}>LOGIN NOW</button>
      <button onClick={() => { logoutClick() }}>LOGOUT NOW</button>
      <button onClick={() => { refreshTokenClick() }}>REFRESH NOW</button>
    
    </div>
  )
}

export default Login;