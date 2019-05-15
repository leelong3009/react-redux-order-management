import { FETCH_CUSTOMERS } from './actionTypes';

export const fetchCustomers = () => dispatch => {
  fetch('/ecommerce/api/customers')
    .then(response => response.json())
    .then(customers =>
      dispatch({
        type: FETCH_CUSTOMERS,
        payload: customers
      })
    );
};
