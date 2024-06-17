import { createSelector } from '@reduxjs/toolkit/react';

import { useAppSelector } from '@store/hooks';

import { selectCounter } from '@pages/Welcome/slice/counterSlice';

export function useStateSelectors() {
  const makeSelectCounterValue = () =>
    createSelector(selectCounter, (counter) => counter.value);

  const counterValue = useAppSelector(makeSelectCounterValue());

  return Object.freeze({ counterValue });
}
