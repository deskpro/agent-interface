import * as React from "react";
import { render } from "react-testing-library";

import ScrollArea from "../ScrollArea";

describe("<ScrollArea />", () => {
  it("should match its snapshot", () => {
    const { getByTestId } = render(
      <ScrollArea data-testid="scrollarea-test">
        <div>Content</div>
      </ScrollArea>
    );
    expect(getByTestId("scrollarea-test")).toMatchSnapshot();
  });
});
