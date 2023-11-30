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
        style = {{ backgroundColor: theme.palette.accentTwo.main}}
        p={3}
      />
      <h1>404</h1>
      <p>Page Not Found!</p>
      <Link to='/'>
        <button>Go to Homepage</button>
      </Link>
    </div>
  )
}

export default NotFound;