import React, { Component } from 'react';

class CustomerRow extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.customerName}</td>
      </tr>
    );
  }
}

export default CustomerRow;
