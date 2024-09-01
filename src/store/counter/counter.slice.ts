import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '..';
import { counterState } from './counter.state';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: counterState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
  },
});

// Action Creators
export const { actions: counterActions } = counterSlice;

// State Selectors
export const selectCounter = (state: RootState) => state.counter;

export default counterSlice.reducer;
