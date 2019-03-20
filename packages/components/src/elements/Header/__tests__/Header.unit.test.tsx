import * as React from "react";
import { render } from "react-testing-library";

import Header from "../Header";

describe("<Header />", () => {
  it("it should match its snapshot", () => {
    const { getByTestId } = render(
      <Header data-testid="header">Header text</Header>
    );
    expect(getByTestId("header")).toMatchSnapshot();
  });
});
