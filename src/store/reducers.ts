/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from '@reduxjs/toolkit';

// Reducers
import counterReducer from '@pages/Welcome/slice/counterSlice';

// Create the root reducer independently to obtain the RootState type
export function rootReducer() {
  return combineReducers({
    counter: counterReducer,
  });
}
