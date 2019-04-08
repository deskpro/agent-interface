import * as React from "react";
import { render, fireEvent } from "react-testing-library";

import StandardOptionList from "../StandardOptionList";

const items = [
  { name: "user", title: "User", disabled: true },
  { name: "agent_team", title: "Agent Team" },
  { name: "labels", title: "Labels" },
  { name: "id", title: "ID" },
  {
    name: "created",
    title: "Created",
    settings: [
      { name: "created.date_only", text: "Date" },
      { name: "created.date_time", text: "Date/Time" },
      { name: "created.time_ago", text: "Time Ago" }
    ]
  },
  {
    name: "waiting_time",
    title: "All waiting time",
    settings: [
      { name: "waiting_time.date_only", text: "Date" },
      { name: "waiting_time.date_time", text: "Date/Time" },
      { name: "waiting_time.time_ago", text: "Time Ago" }
    ]
  }
];

describe("<StandardOptionList />", () => {
  it("should match its snapshot", () => {
    const { container } = render(
      <StandardOptionList
        name="fields"
        items={items}
        checkable
        onCheck={jest.fn()}
        onOrderChange={jest.fn()}
        onSettingChange={jest.fn()}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
