import { describe, it } from 'vitest';

import { fireEvent, render } from '@utils/helpers/test.helpers';

import { Counter } from '..';

describe('Counter component', () => {
  it('should display two buttons `-` and `+` and an initial value of `0` in between', () => {
    const { getByText, getByRole } = render(<Counter />);
    const decrementBtn = getByRole('button', {
      name: '-',
    });
    const incrementBtn = getByRole('button', {
      name: '+',
    });

    expect(getByText('0')).toBeInTheDocument();
    expect(decrementBtn).toBeDisabled();
    expect(incrementBtn).toBeEnabled();
  });

  it('should increment value by 1 at a time when the `+` button is clicked', () => {
    const { getByText, getByRole } = render(<Counter />);
    const incrementBtn = getByRole('button', {
      name: '+',
    });
    expect(getByText('0')).toBeInTheDocument();
    expect(incrementBtn).toBeEnabled();
    fireEvent.click(incrementBtn);
    expect(getByText('1')).toBeInTheDocument();
    fireEvent.click(incrementBtn);
    expect(getByText('2')).toBeInTheDocument();
  });

  it('should decrement value by 1 at a time when the `-` button is clicked', () => {
    const { getByText, getByRole } = render(<Counter />, {
      preloadedState: { counter: { value: 2 } },
    });
    const decrementBtn = getByRole('button', {
      name: '-',
    });
    expect(getByText('2')).toBeInTheDocument();
    expect(decrementBtn).toBeEnabled();
    fireEvent.click(decrementBtn);
    expect(getByText('1')).toBeInTheDocument();
    fireEvent.click(decrementBtn);
    expect(getByText('0')).toBeInTheDocument();
    expect(decrementBtn).toBeDisabled();
  });
});
