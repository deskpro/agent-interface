import React from "react";
import produce from "immer";

import { StandardOptionList } from "@deskpro/agent-interface-components";
import { action } from "@storybook/addon-actions";

const initialItems = [
  { name: "agent", title: "Agent", disabled: true },
  { name: "title", title: "Title", disabled: true },
  { name: "user", title: "User", disabled: true },
  { name: "agent_team", title: "Agent Team" },
  { name: "labels", title: "Labels" },
  { name: "id", title: "ID" },
  { name: "status", title: "Status" },
  { name: "language", title: "Language" },
  { name: "department", title: "Department" },
  { name: "product", title: "Product" },
  { name: "organization", title: "Organization" },
  { name: "sla", title: "SLAs" },
  { name: "user_waiting", title: "User waiting" },
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
  },
  {
    name: "last_reply",
    title: "Date of last reply",
    settings: [
      { name: "last_reply.date_only", text: "Date" },
      { name: "last_reply.date_time", text: "Date/Time" },
      { name: "last_reply.time_ago", text: "Time Ago" }
    ]
  },
  {
    name: "last_user_reply",
    title: "Date of last user reply",
    settings: [
      { name: "last_user_reply.date_only", text: "Date" },
      { name: "last_user_reply.date_time", text: "Date/Time" },
      { name: "last_user_reply.time_ago", text: "Time Ago" }
    ]
  },
  {
    name: "last_agent_reply",
    title: "Date of last agent reply",
    settings: [
      { name: "last_agent_reply.date_only", text: "Date" },
      { name: "last_agent_reply.date_time", text: "Date/Time" },
      { name: "last_agent_reply.time_ago", text: "Time Ago" }
    ]
  },
  {
    name: "date_resolved",
    title: "Date resolved",
    settings: [
      { name: "date_resolved.date_only", text: "Date" },
      { name: "date_resolved.date_time", text: "Date/Time" },
      { name: "date_resolved.time_ago", text: "Time Ago" }
    ]
  },
  { name: "problem", title: "Problem" }
];

/* eslint-disable no-param-reassign */
const itemsReducer = produce((draft, [type, args]) => {
  switch (type) {
    case "check": {
      const idx = draft.findIndex(i => i.name === args.name);
      if (idx > 0) {
        draft[idx].checked = args.checked;
      }
      break;
    }

    case "move": {
      const [removed] = draft.splice(args.from, 1);
      draft.splice(args.to, 0, removed);
      break;
    }

    case "setting": {
      const [itemName] = args.name.split(".");
      const idx = draft.findIndex(i => i.name === itemName);
      if (idx > 0) {
        draft[idx].settings.forEach(s => {
          s.isChecked = s.name === args.name ? args.checked : false;
        });
      }
      break;
    }

    default:
      break;
  }
});
/* eslint-enable no-param-reassign */

const OptionListDemo = () => {
  const [items, dispatch] = React.useReducer(itemsReducer, initialItems);

  return (
    <StandardOptionList
      name="fields"
      items={items}
      sortable
      checkable
      onCheck={(name, checked) => dispatch(["check", { name, checked }])}
      onOrderChange={(name, from, to) => dispatch(["move", { name, from, to }])}
      onSettingChange={action("setting toggle")}
    />
  );
};

export default OptionListDemo;
