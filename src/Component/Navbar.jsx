
import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className="container-fluid">
        <a className='navbar-brand' href="/">
          <i className='fas fa-home me-1'></i> Form App
        </a>
        <div className="navbar-nav">
          <a className='nav-link' href="/login">
            <i className='fas fa-user me-1'></i> Login
          </a>
          <a className='nav-link' href="/signup">
            <i className='fas fa-user-plus me-1'></i> Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

