import React from 'react';
import { HashRouter, Route, Link } from 'react-router-dom';

export const Navbar = () => {
  return(
    <div className='App_header'>
      <div className='header_content'>
        <div>
          <Link to={'/'}>Music App</Link>
        </div>

      </div>
    </div>
  )
}
