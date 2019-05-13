import React, { Component } from 'react';
import CustomerRow from './CustomerRow';

class Customers extends Component {
  render() {
    const { customers } = this.props;
    return (
      <div>
        <table className='table table-striped'>
          <tbody>
            {customers.map(customer => (
              <CustomerRow customerName={customer.name} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Customers;
