import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component {
  render() {
    return (
      <ul className='sidebar navbar-nav'>
        <li className='nav-item'>
          <Link to='/order' className='nav-link'>
            <span>Order</span>
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/customer' className='nav-link'>
            <span>Customer</span>
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/product' className='nav-link'>
            <span>Product</span>
          </Link>
        </li>
      </ul>
    );
  }
}

export default SideBar;
