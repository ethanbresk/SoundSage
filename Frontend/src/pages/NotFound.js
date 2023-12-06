import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/system';
import { Box } from '@mui/material';

const NotFound = () => {
  const theme = useTheme()
  return (
    <div className='notFound'>
      <Box
        position = "fixed"
        bottom = {0}
        width = "100%"
        style = {{ backgroundColor: theme.palette.secondary.main}}
        p={3}
      />
      <h1 style={{color: "white", fontSize: "10em"}}>404</h1>
      <p style={{ color: "white" }}>Page Not Found!</p>
      <Link to='/'>
        <button>Go to Homepage</button>
      </Link>
    </div>
  )
}

export default NotFound;