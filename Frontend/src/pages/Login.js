import React, { useState, useEffect } from 'react';
import { loginWithSpotifyClick, logoutClick, refreshTokenClick, getUserData } from '../utilities/spotify_integration.js';

const Login = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getUserData()
      .then(data => {
        if (data.display_name) {
          setData(data);
        }
        else {
          setData(null);
        }
        })
  }, []);
  return (
    <div className='login'>Login

      {data && <h1>Hello, {data.display_name}</h1>}
      <button onClick={() => { loginWithSpotifyClick() }}>LOGIN NOW</button>
      <button onClick={() => { logoutClick() }}>LOGOUT NOW</button>
      <button onClick={() => { refreshTokenClick() }}>REFRESH NOW</button>
    
    </div>
  )
}

export default Login;