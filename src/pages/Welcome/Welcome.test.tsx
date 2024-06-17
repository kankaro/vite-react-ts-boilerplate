import { describe, it } from 'vitest';

import { Welcome } from '.';

import { setupStore } from '@/store';
import { render } from '@/utils/test.utils';

describe('Welcome Component', () => {
  it('sets up initial state', () => {
    const store = setupStore();
    const { getByText } = render(<Welcome />, {
      store,
    });

    expect(getByText('count is 0')).toBeDefined();
  });

  it('should display a text Vite + React + Typescript', () => {
    const counterState = {
      value: 0,
    };
    const { getByRole } = render(<Welcome />, {
      preloadedState: { counter: counterState },
    });

    expect(
      getByRole('heading', {
        level: 1,
      }),
    ).toHaveTextContent('Vite + React + Typescript');
  });
});
