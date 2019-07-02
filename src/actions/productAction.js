import { FETCH_PRODUCTS } from './actionTypes';

export const fetchProducts = () => dispatch => {
  fetch('/ecommerce/api/products')
    .then(response => response.json())
    .then(products =>
      dispatch({
        type: FETCH_PRODUCTS,
        payload: products
      })
    );
};
