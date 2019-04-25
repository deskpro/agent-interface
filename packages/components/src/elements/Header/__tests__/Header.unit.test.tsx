import * as React from "react";
import { render } from "react-testing-library";

import Header from "../Header";
import Recent from "../Recent";
import Account from "../Account";
import AgentIM from "../AgentIM";
import AgentStatus from "../AgentStatus";
import Notifications from "../Notifications";

describe("<Header />", () => {
  it("should match its snapshot", () => {
    const { container } = render(
      <Header
        onSearch={jest.fn()}
        left={
          <>
            <Recent />
            <AgentIM />
          </>
        }
        right={
          <>
            <Notifications />
            <AgentStatus />
            <Account />
          </>
        }
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
