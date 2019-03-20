import * as React from "react";
import { render } from "react-testing-library";

import Tag from "../Tag";

describe("<Tag />", () => {
  it("Simple snapshot", () => {
    const { getByText } = render(<Tag>Tag text</Tag>);
    expect(getByText("Tag text")).toMatchSnapshot();
  });
});
