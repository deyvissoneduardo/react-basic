import React from "react";
import { Posts } from ".";
import { render, screen } from "@testing-library/react";

const props = {
  posts: [
    {
      id: 1,
      title: "title 01",
      body: "body01",
      cover: "img/img01.png",
    },
    {
      id: 2,
      title: "title 02",
      body: "body02",
      cover: "img/img02.png",
    },
    {
      id: 3,
      title: "title 03",
      body: "body03",
      cover: "img/img03.png",
    },
  ],
};

describe("<Posts />", () => {
  test("should render posts", () => {
    render(<Posts {...props} />);

    expect(screen.getAllByRole("heading", { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByRole("img", { name: /title/i })).toHaveLength(3);
    expect(screen.getAllByText(/body/i)).toHaveLength(3);
  });

  test("should match snapshot", () => {
    const { container } = render(<Posts {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
