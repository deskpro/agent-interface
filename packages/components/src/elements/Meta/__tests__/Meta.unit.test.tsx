import * as React from "react";
import { render } from "react-testing-library";

import Meta from "../Meta";

describe("<Meta />", () => {
  it("it should match its snapshot", () => {
    const { container } = render(<Meta name="Name" value="Value" />);
    expect(container.querySelector(".dp-Meta")).toMatchSnapshot();
  });
});
