import * as React from "react";
import { render, fireEvent } from "react-testing-library";

import Badge from "../Badge";

describe("<Badge />", () => {
  it("should match its snapshot 'id'", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Badge type="id" onClick={handleClick}>
        Badge
      </Badge>
    );
    expect(getByText("Badge")).toMatchSnapshot();
  });
  it("should call onClick fn on click", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Badge type="filterPill" className="test-badge" onClick={handleClick}>
        Badge
      </Badge>
    );

    fireEvent(
      getByText("Badge"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(handleClick.mock.calls.length).toBe(1);
  });
});
