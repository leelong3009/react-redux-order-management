import React, { Component } from 'react';
import ReactTable from 'react-table';
import { connect } from 'react-redux';
import { fetchCustomers } from '../actions/customerAction';
import 'react-table/react-table.css';

class Content extends Component {
  componentWillMount() {
    this.props.fetchCustomers();
  }

  render() {
    const columns = [
      {
        Header: 'Name',
        accessor: 'name' // String-based value accessors!
      },
      {
        Header: 'Email',
        accessor: 'email',
        Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
      }
    ];

    return <ReactTable data={this.props.customers} columns={columns} />;
  }
}

const mapStateToProps = state => {
  const customers = state.customers;
  console.log(state.customers);
  return { customers };
};

export default connect(
  mapStateToProps,
  { fetchCustomers }
)(Content);
