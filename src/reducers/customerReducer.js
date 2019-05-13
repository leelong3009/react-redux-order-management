import { FETCH_CUSTOMERS } from '../actions/actionTypes';

const initialState = {
  customers: []
};

const customerReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_CUSTOMERS:
      return {
        ...state,
        customers: action.payload
      };
    default:
      return state;
  }
};

export default customerReducer;
