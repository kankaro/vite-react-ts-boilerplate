import { useCallback } from 'react';

import { useActionDispatchers } from './useActionDispatchers';

export function useCounter() {
  const { dispatchSetCounterIncrement, dispatchSetCounterDecrement } =
    useActionDispatchers();

  const incrementCounter = useCallback(
    (value: number) =>
      (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        event.stopPropagation();
        dispatchSetCounterIncrement(value + 1);
      },
    [],
  );

  const decrementCounter = useCallback(
    (value: number) =>
      (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        event.stopPropagation();
        dispatchSetCounterDecrement(value - 1);
      },
    [],
  );

  return Object.freeze({ incrementCounter, decrementCounter });
}
