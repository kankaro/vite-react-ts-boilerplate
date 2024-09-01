import { combineReducers } from '@reduxjs/toolkit';

// Import reducers
import counterReducer from './counter/counter.slice';

export const rootReducer = combineReducers({
  counter: counterReducer,
});
