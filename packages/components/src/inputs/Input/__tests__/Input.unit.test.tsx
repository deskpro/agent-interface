import * as React from "react";
import { render } from "react-testing-library";

import Input from "../Input";

describe("<Input />", () => {
  it("it should match its snapshot", () => {
    const handleChange = jest.fn();
    const { container } = render(
      <Input onChange={handleChange} type="text" value="Input value" />
    );
    expect(container.querySelector(".dp-Form-item")).toMatchSnapshot();
  });
});
