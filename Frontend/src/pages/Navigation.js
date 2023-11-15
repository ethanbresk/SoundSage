import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {;
  return (
    <nav className='navigation'>
      <div className='navigation_links'>
        <Link to='/' title='Link to Home Page'>Home  </Link>
        <Link to='/profile' title='Link to Profile Page'>Profile  </Link>
        <Link to='/create' title='Link to New Blog Page'>+</Link>
      </div>
    </nav>
    )
}

export default Navigation;