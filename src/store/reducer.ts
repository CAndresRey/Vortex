import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../modules/Home/slices/counter.slice';

const reducers = combineReducers({
  counter: counterReducer,
});


export default reducers;