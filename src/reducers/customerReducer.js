import { FETCH_CUSTOMERS } from "../actions/actionTypes";

const initialState = {
  items: []
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CUSTOMERS:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
};

export default customerReducer;
