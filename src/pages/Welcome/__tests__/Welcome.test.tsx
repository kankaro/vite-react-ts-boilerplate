import { describe, it } from 'vitest';

import Welcome from '..';

import { fireEvent, render } from '@/utils/test.utils';

describe('Welcome Component', () => {
  it('should display the image logo of each technology', () => {
    const { getByAltText } = render(<Welcome />);
    expect(getByAltText('Vite logo')).toBeInTheDocument();
    expect(getByAltText('React logo')).toBeInTheDocument();
    expect(getByAltText('Typescript logo')).toBeInTheDocument();
  });

  it('should display `Vite + React + Typescript`', () => {
    const { getByRole } = render(<Welcome />);
    expect(
      getByRole('heading', {
        level: 1,
      }),
    ).toHaveTextContent('Vite + React + Typescript');
  });

  it('should display `Click on the Vite, React and Typescript logos to learn more`', () => {
    const { getByText } = render(<Welcome />);
    expect(
      getByText('Click on the Vite, React and Typescript logos to learn more'),
    ).toBeInTheDocument();
  });

  it('should display two buttons `-` and `+` and a text of `count is 0` in between', () => {
    const { getByText, getByRole } = render(<Welcome />);

    const textInBetweenButtons = getByText('count is 0');
    const decrementButton = getByRole('button', {
      name: '-',
    });
    const incrementButton = getByRole('button', {
      name: '+',
    });

    expect(textInBetweenButtons).toBeInTheDocument();
    expect(decrementButton).toBeDefined();
    expect(incrementButton).toBeDefined();

    // Expect decrement button is disabled by default
    expect(decrementButton).toBeDisabled();
    expect(incrementButton).toBeEnabled();
  });

  it('counter value should increment/decrement by 1 when +/- button is clicked', () => {
    const { getByText, getByRole } = render(<Welcome />);
    const decrementButton = getByRole('button', {
      name: '-',
    });
    const incrementButton = getByRole('button', {
      name: '+',
    });

    fireEvent.click(incrementButton);
    expect(getByText('count is 1')).toBeInTheDocument();
    expect(decrementButton).toBeEnabled();

    fireEvent.click(incrementButton);
    expect(getByText('count is 2')).toBeInTheDocument();

    fireEvent.click(decrementButton);
    expect(getByText('count is 1')).toBeInTheDocument();

    fireEvent.click(decrementButton);
    expect(getByText('count is 0')).toBeInTheDocument();
    expect(decrementButton).toBeDisabled();
  });
});
