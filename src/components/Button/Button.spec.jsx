import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from '.';

describe('<Button />', () => {
  test('should render the button with the text "Load more"', () => {
    render(<Button title="Load More" />);

    expect(screen.getByRole('button', { name: /load more/i })).toBeInTheDocument();
  });

  test('should call fuction on button click', () => {
    const fn = jest.fn();
    render(<Button title="Load More" onClick={fn} />);

    fireEvent.click(screen.getByRole('button', { name: /load more/i }));

    expect(fn).toHaveBeenCalledTimes(1);
  });

  test('should be disabled when disabled true', () => {
    render(<Button title="Load More" disabled={true} />);

    expect(screen.getByRole('button', { name: /load more/i })).toBeDisabled();
  });

  test('should be enabled when enabled true', () => {
    render(<Button title="Load More" disabled={false} />);

    expect(screen.getByRole('button', { name: /load more/i })).toBeEnabled();
  });

  test('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<Button title="Load More" onClick={fn} disabled={true} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
