import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCustomers } from '../../actions/customerAction';
import { Table } from '../table/Table';

class Customer extends Component {
  componentWillMount() {
    this.props.fetchCustomers();
  }

  render() {
    const tableMetadata = [
      {
        accessKey: 'name',
        header: 'Name'
      },
      {
        accessKey: 'email',
        header: 'Email'
      }
    ];

    return <Table entries={this.props.customers} metadata={tableMetadata} />;
  }
}

const mapStateToProps = state => {
  const customers = state.root.customers;
  return { customers };
};

export default connect(
  mapStateToProps,
  { fetchCustomers }
)(Customer);
