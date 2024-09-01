import { useAppDispatch } from '../hooks';
import { counterActions } from './counter.slice';

export function useCounterActionsDispatcher() {
  const dispatch = useAppDispatch();

  function increment() {
    dispatch(counterActions.increment());
  }

  function decrement() {
    dispatch(counterActions.decrement());
  }

  return Object.freeze({ increment, decrement });
}
