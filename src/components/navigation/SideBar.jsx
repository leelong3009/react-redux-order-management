import React, { Component } from 'react';

class SideBar extends Component {
  render() {
    return (
      <ul className='sidebar navbar-nav'>
        <li className='nav-item'>
          <a className='nav-link' href='charts.html'>
            <span>Order</span>
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='charts.html'>
            <span>Customer</span>
          </a>
        </li>
      </ul>
    );
  }
}

export default SideBar;
