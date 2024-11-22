// components/Error.js
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Error = () => {
  return (
    <div className='text-center'>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for does not exist.</p>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
};

export default Error;



