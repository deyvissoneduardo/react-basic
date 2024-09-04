import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from ".";
import userEvent from "@testing-library/user-event";

describe("<Button />", () => {
  test('should render the button with the text "Load more"', () => {
    render(<Button title="Load More" />);

    const button = screen.getByRole("button", { name: /load more/i });

    expect(button).toBeInTheDocument();
  });

  test("should call fuction on button click", () => {
    const fn = jest.fn();
    render(<Button title="Load More" onClick={fn} />);

    const button = screen.getByRole("button", { name: /load more/i });
    fireEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });

  test("should be disabled when disabled true", () => {
    render(<Button title="Load More" disabled={true} />);

    const button = screen.getByRole("button", { name: /load more/i });

    expect(button).toBeDisabled()
  });

  test("should be enabled when enabled true", () => {
    render(<Button title="Load More" disabled={false} />);

    const button = screen.getByRole("button", { name: /load more/i });

    expect(button).toBeEnabled()
  });
});
