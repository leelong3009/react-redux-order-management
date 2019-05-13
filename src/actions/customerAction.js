import { FETCH_CUSTOMERS } from './actionTypes';

export const fetchCustomers = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(customers =>
      dispatch({
        type: FETCH_CUSTOMERS,
        payload: customers
      })
    );
};
