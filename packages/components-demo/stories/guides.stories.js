import React from "react";

import { storiesOf } from "@storybook/react";

import { Guides } from "@deskpro/agent-interface-components";
import { action } from "@storybook/addon-actions";

const guides = [
  {
    id: 4,
    title: "Sysadmin Guide",
    slug: "sysadmin-guide",
    icon: "user"
  },
  {
    id: 3,
    title: "Reports Guide",
    slug: "reports-guide",
    icon: "reports"
  },
  {
    id: 2,
    title: "Agent Guide",
    slug: "agent-guide",
    icon: "owner"
  },
  {
    id: 1,
    title: "Admin guide",
    slug: "admin-guide",
    icon: "support"
  }
];

const sections = [
  { id: 1, title: "Introducing Deskpro" },
  { id: 2, title: "Creating your helpdesk" },
  { id: 3, title: "Launching your helpdesk" },
  { id: 4, title: "Importing data" },
  { id: 5, title: "Agents" },
  { id: 6, title: "Departments" },
  { id: 7, title: "Email accounts" },
  { id: 8, title: "Ticket fields" },
  { id: 9, title: "Automating the helpdesk" },
  { id: 10, title: "CRM and usergroups" },
  { id: 11, title: "Portal" },
  { id: 12, title: "Multibrand" },
  { id: 13, title: "Editing templates" },
  { id: 14, title: "Localization" },
  { id: 15, title: "Integration" },
  { id: 16, title: "Labels" },
  { id: 17, title: "Billing" }
];

storiesOf("Guides", module)
  .add("Guides", () => (
    <div style={{ width: 450 }}>
      <Guides items={guides} onSettingsClick={action()} />
    </div>
  ))
  .add("Sections", () => (
    <div style={{ width: 450 }}>
      <Guides
        items={sections}
        reorderable
        kind="sections"
        onSettingsClick={action()}
      />
    </div>
  ));
