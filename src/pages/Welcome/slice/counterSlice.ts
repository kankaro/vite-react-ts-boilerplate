import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@/store';

import { counterState } from './counterState';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: counterState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

/* ------- ACTION CREATORS ------- */
export const { actions: counterActions } = counterSlice;

/* ------- STATE SELECTOR ------- */
export const selectCounter = (state: RootState) =>
  state.counter || counterState;

export default counterSlice.reducer;
