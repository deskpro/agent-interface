import * as React from "react";
import { render, fireEvent } from "react-testing-library";

import Arrow from "../Arrow";

describe("<Arrow />", () => {
  it("Simple snapshot", () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Arrow data-testid="arrow-button" onClick={handleClick} />
    );
    expect(getByTestId("arrow-button")).toMatchSnapshot();
  });
  it("should call onClick fn on click", () => {
    const handleClick = jest.fn();
    const { getByTestId } = render(
      <Arrow data-testid="arrow-button" onClick={handleClick} />
    );

    fireEvent(
      getByTestId("arrow-button"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(handleClick.mock.calls.length).toBe(1);
  });
});
