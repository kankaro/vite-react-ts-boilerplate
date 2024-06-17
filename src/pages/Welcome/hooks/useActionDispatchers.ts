import { useAppDispatch } from '@store/hooks';

import { counterActions } from '@pages/Welcome/slice/counterSlice';

export function useActionDispatchers() {
  const dispatch = useAppDispatch();

  function dispatchSetCounterIncrement(value: number) {
    dispatch(counterActions.increment(value));
  }

  function dispatchSetCounterDecrement(value: number) {
    if (value < 0) {
      return;
    }
    dispatch(counterActions.increment(value));
  }

  return Object.freeze({
    dispatchSetCounterIncrement,
    dispatchSetCounterDecrement,
  });
}
