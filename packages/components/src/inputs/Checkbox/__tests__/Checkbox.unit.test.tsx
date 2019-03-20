import * as React from "react";
import { render } from "react-testing-library";

import Checkbox from "../Checkbox";

describe("<Checkbox />", () => {
  it("should match its snapshot", () => {
    const handleChange = jest.fn();
    const { container } = render(
      <Checkbox
        onChange={handleChange}
        label="Checkbox"
        checked
        labelClassName="label-class-name"
      />
    );
    expect(container.querySelector(".dp-CustomCheckbox")).toMatchSnapshot();
  });
});
