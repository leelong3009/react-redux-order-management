import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faUsers } from '@fortawesome/free-solid-svg-icons';

class SideBar extends Component {
  render() {
    const iconColor = 'rgba(255, 255, 255, 0.5)';
    return (
      <ul className='sidebar navbar-nav'>
        <li className='nav-item'>
          <a className='nav-link' href='charts.html'>
            <FontAwesomeIcon
              icon={faShoppingBasket}
              color={iconColor}
              style={{ marginRight: 5 }}
            />
            <span>Order</span>
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='charts.html'>
            <span>
              <FontAwesomeIcon
                icon={faUsers}
                color={iconColor}
                style={{ marginRight: 5 }}
              />
              Customer
            </span>
          </a>
        </li>
      </ul>
    );
  }
}

export default SideBar;
