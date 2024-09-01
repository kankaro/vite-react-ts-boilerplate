import { useCallback } from 'react';

import { useCounterActionsDispatcher, useCounterSelector } from '@store/counter';

export function useCounterViewModel() {
  const { counter } = useCounterSelector();
  const action = useCounterActionsDispatcher();

  const increment = useCallback(() => {
    action.increment();
  }, [action]);

  const decrement = useCallback(() => {
    action.decrement();
  }, [action]);

  return Object.freeze({ counter, increment, decrement });
}
