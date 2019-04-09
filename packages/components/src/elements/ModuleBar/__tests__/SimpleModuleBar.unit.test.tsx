import * as React from "react";
import { render, fireEvent } from "react-testing-library";

import SimpleModuleBar from "../SimpleModuleBar";

const modules = [
  { icon: "ticket", name: "ticket", label: "Tickets" },
  { icon: "crm", name: "crm", label: "CRM" },
  { icon: "chat", name: "chat", label: "Chats" },
  { icon: "feedback", name: "feedback", label: "Feedback" },
  { icon: "publish", name: "publish", label: "Publish" },
  { icon: "tasks-sidebar", name: "tasks-sidebar", label: "Tasks" },
  "-",
  { icon: "reports", name: "reports", label: "Reports" },
  { icon: "admin", name: "admin", label: "Admin" },
  { icon: "billing", name: "billing", label: "Billing" }
];

const portalLinks = [
  {
    icon: "plane",
    title: "Raven Paper",
    subtitle: "support.ravenpaper.com",
    link: "http://support.ravenpaper.com"
  },
  {
    icon: "plane-orange",
    title: "Raven Paper Crafts",
    subtitle: "support.ravenpapercrafts.com",
    link: "http://support.ravenpapercrafts.com"
  },
  {
    icon: "plane-violet",
    title: "RP Europe",
    subtitle: "support.rpeurope.com",
    link: "http://support.rpeurope.com"
  }
];

describe("<SimpleModuleBar />", () => {
  it("should match its snapshot", () => {
    const { container } = render(
      <SimpleModuleBar
        className="module-bar"
        items={modules}
        portalMenuLinks={portalLinks}
        onItemClick={jest.fn()}
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render separator", () => {
    const { container } = render(
      <SimpleModuleBar
        className="module-bar"
        items={modules}
        portalMenuLinks={portalLinks}
        onItemClick={jest.fn()}
      />
    );
    expect(
      container.querySelector(".dp-ModuleBar-separator")
    ).toBeInTheDocument();
  });

  it("should toggle active items on click", () => {
    const clickHandler = jest.fn();
    const { getByText, container } = render(
      <SimpleModuleBar
        className="module-bar"
        items={modules}
        portalMenuLinks={portalLinks}
        onItemClick={clickHandler}
      />
    );

    expect(getByText("CRM")).toBeInTheDocument();
    const ticketItem = container.querySelector(".Icon--ticket");
    fireEvent.click(ticketItem);
    expect(
      ticketItem.parentElement.classList.contains("is-active")
    ).toBeTruthy();
    expect(clickHandler).toBeCalledTimes(1);
    expect(clickHandler.mock.calls[0][0]).toBe("ticket");
  });

  it("should open the portal menu on click", () => {
    const clickHandler = jest.fn();
    const { container } = render(
      <SimpleModuleBar
        className="module-bar"
        items={modules}
        portalMenuLinks={portalLinks}
        onItemClick={clickHandler}
      />
    );

    const portalItem = container.querySelector(".Icon--portal");
    fireEvent.click(portalItem);
    expect(
      container
        .querySelector(".dp-ModuleBarMenu")
        .classList.contains("is-visible")
    ).toBeTruthy();
  });
});
