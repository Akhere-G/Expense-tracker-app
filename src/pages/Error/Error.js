import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <h2 className='title'>Error</h2>
      <p className='mt-2'>page not found</p>
      <Link to='/' className='btn'>
        Go back to home
      </Link>
    </div>
  );
};

export default Error;
