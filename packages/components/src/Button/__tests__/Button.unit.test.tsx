import * as React from "react";
import { render, fireEvent } from "react-testing-library";

import Button from "../Button";

describe("<Button />", () => {
  it("Simple snapshot", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button onClick={handleClick}>Simple Button</Button>
    );
    expect(getByText("Simple Button")).toMatchSnapshot();
  });
  it("More variant snapshot", () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Button data-testid="more-button" variant="more" onClick={handleClick}>
        More Button
      </Button>
    );
    expect(getByTestId("more-button")).toMatchSnapshot();
  });
  it("should render attributes", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button onClick={handleClick}>Simple Button</Button>
    );

    expect(getByText("Simple Button")).toHaveAttribute("type", "button");
  });
  it("should call onClick fn on click", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button onClick={handleClick}>Simple Button</Button>
    );

    fireEvent(
      getByText("Simple Button"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(handleClick.mock.calls.length).toBe(1);
  });
});
