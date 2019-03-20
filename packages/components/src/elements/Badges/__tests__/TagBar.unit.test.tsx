import * as React from "react";
import { render } from "react-testing-library";

import Tag from "../Tag";
import TagBar from "../TagBar";

describe("<TagBar />", () => {
  it("it should match its snapshot", () => {
    const { getByTestId } = render(
      <TagBar data-testid="tagbar">
        <Tag>First</Tag>
        <Tag>Second</Tag>
        <Tag>Third</Tag>
      </TagBar>
    );
    expect(getByTestId("tagbar")).toMatchSnapshot();
  });
});
