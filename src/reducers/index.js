import { combineReducers } from "redux";
import customerReducer from "./customerReducer";

export const rootReducer = combineReducers({ customer: customerReducer });
