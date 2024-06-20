import { useCallback } from 'react';

import { useActionDispatchers } from './useActionDispatchers';

export function useCounter() {
  const { dispatchSetCounterIncrement, dispatchSetCounterDecrement } =
    useActionDispatchers();

  const incrementCounter = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      event.stopPropagation();
      dispatchSetCounterIncrement();
    },
    [],
  );

  const decrementCounter = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault();
      event.stopPropagation();
      dispatchSetCounterDecrement();
    },
    [],
  );

  return Object.freeze({ incrementCounter, decrementCounter });
}
