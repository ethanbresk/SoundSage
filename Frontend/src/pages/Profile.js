import React from 'react';
import { SearchBar } from '../components/searchbar'

const Profile = () => {
  return (
    <div className='profile'>
      <h1 className='page_header'>Profile</h1>
      <SearchBar></SearchBar>
    </div>
  )
}

export default Profile;