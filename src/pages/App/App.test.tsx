import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { App } from '.';

describe('App Component', () => {
  it('should render the title', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        level: 1,
      }),
    ).toHaveTextContent('Vite + React');
  });
});
