import React from "react";

import { ActionsBar } from "@deskpro/agent-interface-components";
import action from "@storybook/addon-actions/dist/preview/action";

const actionsBarOutlined = [
  {
    name: "lock",
    title: "Lock",
    icon: "lock",
    items: [
      { name: "lock", text: "Lock", icon: "lock" },
      { name: "hold", text: "Put the ticket on hold", icon: "on-hold" },
      { name: "delete", text: "Delete", icon: "bin" }
    ]
  },
  {
    name: "link",
    title: "Link",
    icon: "link",
    items: [
      { name: "create-linked", text: "Create linked ticket", icon: "lock" },
      { name: "link-existing", text: "Link existing tiket", icon: "link" },
      { name: "split", text: "Split message to new ticket", icon: "transfer" },
      { name: "merge", text: "Merge", icon: "merge" }
    ]
  },
  {
    name: "new",
    title: "New",
    icon: "new",
    items: [
      { name: "create-linked", text: "Create linked ticket", icon: "lock" },
      { name: "link-existing", text: "Link existing tiket", icon: "link" },
      { name: "split", text: "Split message to new ticket", icon: "transfer" },
      { name: "merge", text: "Merge", icon: "merge" }
    ]
  },
  {
    name: "print",
    title: "Print",
    icon: "print",
    items: [
      { name: "print", text: "Print", icon: "print" },
      { name: "download-pdf", text: "Download PDF", icon: "download" },
      { name: "download-debug", text: "Download debug file", icon: "beetle" }
    ]
  },
  {
    name: "ban",
    title: "Ban",
    icon: "ban",
    items: [
      { name: "ban", text: "Ban", icon: "ban" },
      { name: "spam", text: "Spam", icon: "spam" }
    ]
  },
  {
    name: "actions",
    title: "Actions",
    icon: "rocket",
    items: [
      { name: "action-1", text: "Misc value", icon: "rocket" },
      { name: "action-2", text: "Misc value", icon: "rocket" },
      { name: "action-3", text: "Misc value", icon: "rocket" }
    ]
  }
];

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

const ActionsBarDemo = ({ isOutlined = false }) => (
  <ActionsBar
    items={isOutlined ? actionsBarOutlined : actionsBar}
    outlined={isOutlined}
    onItemClick={action(`actions bar ${isOutlined ? "outlined" : ""}`)}
  />
);

export default ActionsBarDemo;
