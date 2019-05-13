import { combineReducers } from 'redux';
import customerReducer from './customerReducer';

export const rootReducer = combineReducers({ customerReducer });
