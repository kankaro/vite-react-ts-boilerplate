/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from '@reduxjs/toolkit';

// Reducers
import counterReducer from '@pages/Welcome/slice/counterSlice';

// Create the root reducer independently to obtain the RootState type
export const rootReducer = combineReducers({
  counter: counterReducer,
});
