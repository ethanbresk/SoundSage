import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='notFound'>
      <h1>404</h1>
      <p>Page Not Found!</p>
      <Link to='/'>
        <button>Go to Homepage</button>
      </Link>
    </div>
  )
}

export default NotFound;