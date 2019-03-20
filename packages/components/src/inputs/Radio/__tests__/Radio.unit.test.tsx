import * as React from "react";
import { render } from "react-testing-library";

import Radio from "../Radio";

describe("<Radio />", () => {
  it("it should match its snapshot", () => {
    const handleChange = jest.fn();
    const { container } = render(
      <Radio onChange={handleChange} label="Radio" checked />
    );
    expect(container.querySelector(".dp-RadioItem")).toMatchSnapshot();
  });
});
