import React, { Component } from 'react';
import flag from '../images/flag.png';

class NavBar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand navbar-dark bg-dark static-top'>
        <img
          src={flag}
          style={{ width: 50 }}
          className='navbar-brand'
          alt='logo'
        />
        <span className='navbar-brand mr-1'>AUSTRALIA Business Management</span>
      </nav>
    );
  }
}

export default NavBar;
