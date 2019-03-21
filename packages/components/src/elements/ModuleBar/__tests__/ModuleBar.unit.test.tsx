import * as React from "react";
import { render } from "react-testing-library";

import ModuleBar from "../ModuleBar";
import ModuleBarMenu from "../ModuleBarMenu";

describe("<TagBar />", () => {
  it("should match its snapshot", () => {
    const handleClick = jest.fn();
    const { container } = render(
      <ModuleBar className="module-bar">
        <ModuleBar.Item
          icon="ticket"
          label="Tickets"
          isActive
          onClick={handleClick}
        />
        <ModuleBar.Item
          icon="billing"
          label="Billing"
          isActive={false}
          onClick={handleClick}
        />
        <ModuleBar.Separator />
        <ModuleBar.Item icon="portal" onClick={handleClick}>
          <ModuleBarMenu title="Portals" isVisible>
            <ModuleBarMenu.Item
              icon="plane"
              title="Raven Paper"
              subtitle="support.ravenpaper.com"
              link="http://support.ravenpaper.com"
            />
            <ModuleBarMenu.Item
              icon="plane-violet"
              title="RP Europe"
              subtitle="support.rpeurope.com"
              link="http://support.rpeurope.com"
            />
          </ModuleBarMenu>
        </ModuleBar.Item>
      </ModuleBar>
    );
    expect(container.querySelector(".module-bar")).toMatchSnapshot();
  });
});
