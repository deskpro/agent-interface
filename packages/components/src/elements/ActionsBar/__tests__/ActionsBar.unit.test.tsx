import * as React from "react";
import { render, fireEvent } from "react-testing-library";

import ActionsBar from "../ActionsBar";

const actionsBar = [
  {
    name: "tasks",
    title: "Tasks",
    icon: "tasks",
    items: [
      { name: "lock", text: "Lock", icon: "lock" },
      { name: "hold", text: "Put the ticket on hold", icon: "on-hold" },
      { name: "delete", text: "Delete", icon: "bin" }
    ]
  },
  {
    name: "billing",
    title: "Billing",
    icon: "billing",
    items: [
      { name: "create-linked", text: "Create linked ticket", icon: "lock" },
      { name: "link-existing", text: "Link existing tiket", icon: "link" },
      { name: "split", text: "Split message to new ticket", icon: "transfer" },
      { name: "merge", text: "Merge", icon: "merge" }
    ]
  },
  {
    name: "license",
    title: "License",
    icon: "liscense",
    items: [
      { name: "create-linked", text: "Create linked ticket", icon: "lock" },
      { name: "link-existing", text: "Link existing tiket", icon: "link" },
      { name: "split", text: "Split message to new ticket", icon: "transfer" },
      { name: "merge", text: "Merge", icon: "merge" }
    ]
  },
  {
    name: "ticket-properties",
    title: "Ticket Properties",
    icon: "ticket-properties",
    items: [
      { name: "print", text: "Print", icon: "print" },
      { name: "download-pdf", text: "Download PDF", icon: "download" },
      { name: "download-debug", text: "Download debug file", icon: "beetle" }
    ]
  },
  {
    name: "follow-up",
    title: "Follow-ups",
    icon: "follow-up",
    items: [
      { name: "ban", text: "Ban", icon: "ban" },
      { name: "spam", text: "Spam", icon: "spam" }
    ]
  }
];

describe("<ActionsBar />", () => {
  it("should match snapshot for the general bar", () => {
    const { container } = render(
      <ActionsBar items={actionsBar} onItemClick={jest.fn()} />
    );
    expect(container.firstChild).toMatchSnapshot("General ActionsBar");
  });

  it("should match snapshot for the outlined bar", () => {
    const { container } = render(
      <ActionsBar items={actionsBar} type="outlined" onItemClick={jest.fn()} />
    );
    expect(container.firstChild).toMatchSnapshot("Outlined ActionsBar");
  });

  it("should call item click handler with correct arguments", () => {
    const handleItemClick = jest.fn();
    const { getByText } = render(
      <ActionsBar
        items={actionsBar}
        type="outlined"
        onItemClick={handleItemClick}
      />
    );

    expect(getByText("Tasks")).toBeInTheDocument();
    fireEvent.click(getByText("Tasks"));
    expect(getByText("Lock")).toBeInTheDocument();
    fireEvent.click(getByText("Lock"));
    expect(handleItemClick).toBeCalledTimes(1);
    expect(handleItemClick.mock.calls[0][0]).toBe("lock");
  });
});
