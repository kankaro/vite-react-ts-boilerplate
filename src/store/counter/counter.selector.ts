import { createSelector } from '@reduxjs/toolkit';

import { useAppSelector } from '../hooks';
import { selectCounter } from './counter.slice';

export function useCounterSelector() {
  const counter = useAppSelector(createSelector(selectCounter, (counter) => counter.value));

  return Object.freeze({ counter });
}
