import { Button } from '@/components/button/button';

import { useCounterViewModel } from './counter.vm';

export function Counter() {
  const { counter, increment, decrement } = useCounterViewModel();

  return (
    <div className="flex items-center gap-2 justify-center">
      <Button onClick={decrement} disabled={counter === 0}>
        <span> - </span>
      </Button>

      <span
        role="counter"
        className="block py-2 px-4 bg-neutral-600 rounded-lg w-28 border border-neutral-600"
      >
        {counter}
      </span>

      <Button onClick={increment}>
        <span> + </span>
      </Button>
    </div>
  );
}
