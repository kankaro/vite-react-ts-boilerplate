import { useAppDispatch } from '@store/hooks';

import { counterActions } from '@pages/Welcome/slice/counterSlice';

export function useActionDispatchers() {
  const dispatch = useAppDispatch();

  function dispatchSetCounterIncrement() {
    dispatch(counterActions.increment());
  }

  function dispatchSetCounterDecrement() {
    dispatch(counterActions.decrement());
  }

  return Object.freeze({
    dispatchSetCounterIncrement,
    dispatchSetCounterDecrement,
  });
}
