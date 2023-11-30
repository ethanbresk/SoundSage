import React from 'react';
import { SearchBar } from '../components/searchbar'
import { useTheme } from '@mui/system';
import { Box } from '@mui/material';

const Profile = () => {
  const theme = useTheme()
  return (
    <div className='profile'>
      <Box
        position = "fixed"
        bottom = {0}
        width = "100%"
        style = {{ backgroundColor: theme.palette.accentTwo.main}}
        p={3}
      />
      <h1 className='page_header'>Profile</h1>
      <SearchBar></SearchBar>
    </div>
  )
}

export default Profile;