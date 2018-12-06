import * as React from "react";
import { render } from "react-testing-library";

import Button from "../Button";

describe("<Button />", () => {
  it("should render attributes", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button onClick={handleClick}>Simple Button</Button>
    );

    expect(getByText("Simple Button")).toHaveAttribute("type", "button");
  });
});
