import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../actions/productAction';
import { Table } from '../table/Table';

class Product extends Component {
  componentWillMount() {
    this.props.fetchProducts();
  }

  render() {
    const tableMetadata = [
      {
        accessKey: 'name',
        header: 'Name'
      },
      {
        accessKey: 'price',
        header: 'Price'
      }
    ];

    return <Table entries={this.props.products} metadata={tableMetadata} />;
  }
}

const mapStateToProps = state => {
  const products = state.root.products;
  return { products };
};

export default connect(
  mapStateToProps,
  { fetchProducts }
)(Product);
