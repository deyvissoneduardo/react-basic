import React from "react";
import { render, screen } from "@testing-library/react";
import { PostCard } from ".";
import { postCardPropsMock } from "./mock";

describe("<PostCard />", () => {
  test("should render PostCard correctly", () => {
    render(<PostCard {...postCardPropsMock} />);

    expect(
      screen.getByRole("img", { name: postCardPropsMock.title })
    ).toHaveAttribute("src", postCardPropsMock.cover);

    expect(
      screen.getByRole("heading", { name: postCardPropsMock.title })
    ).toBeInTheDocument();

    expect(screen.getByText(postCardPropsMock.body)).toBeInTheDocument();
  });

  test("should match snapshot", () => {
    const { container } =   render(<PostCard {...postCardPropsMock} />);

    expect(container.firstChild).toMatchSnapshot()
  });
});
