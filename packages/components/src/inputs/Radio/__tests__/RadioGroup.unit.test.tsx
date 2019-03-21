import * as React from "react";
import { render } from "react-testing-library";

import Radio from "../Radio";
import RadioGroup from "../RadioGroup";

describe("<Radio />", () => {
  it("should match its snapshot", () => {
    const handleChange = jest.fn();
    const { container } = render(
      <RadioGroup className="radio-group-test">
        <Radio
          id="one"
          label="Option one"
          value="one"
          onChange={handleChange}
        />
        <Radio
          id="two"
          label="Option two"
          value="two"
          onChange={handleChange}
        />
        <Radio
          id="three"
          label="Option three"
          value="three"
          onChange={handleChange}
        />
      </RadioGroup>
    );
    expect(container.querySelector(".radio-group-test")).toMatchSnapshot();
  });
});
