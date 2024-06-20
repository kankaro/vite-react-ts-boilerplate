import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@/store';

import { counterState } from './counterState';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: counterState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

/* ------- ACTION CREATORS ------- */
export const { actions: counterActions } = counterSlice;

/* ------- STATE SELECTOR ------- */
export const selectCounter = (state: RootState) => state.counter;

export default counterSlice.reducer;
