import * as React from "react";
import { render } from "react-testing-library";

import Input from "../Input";

describe("<Input />", () => {
  it("should match its snapshot", () => {
    const handleChange = jest.fn();
    const { container } = render(
      <Input
        onChange={handleChange}
        className="test-input"
        icon="avatar"
        value="Input value"
        error="Test error"
      />
    );
    expect(container.querySelector(".dp-Form-item")).toMatchSnapshot();
  });
});
