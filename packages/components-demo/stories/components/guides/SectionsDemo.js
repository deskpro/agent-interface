import React from "react";

import {
  Guides,
  OrderingBar,
  Icon,
  MemoryRouter
} from "@deskpro/agent-interface-components";
import { action } from "@storybook/addon-actions";

const sections = [
  { id: 1, title: "Introducing Deskpro", slug: "introducing-deskpro" },
  { id: 2, title: "Creating your helpdesk", slug: "creating-helpdesk" },
  { id: 3, title: "Launching your helpdesk", slug: "launching-helpdesk" },
  { id: 4, title: "Importing data", slug: "importing-data" },
  { id: 5, title: "Agents", slug: "agents" },
  { id: 6, title: "Departments", slug: "departments" },
  { id: 7, title: "Email accounts", slug: "email-accounts" },
  { id: 8, title: "Ticket fields", slug: "ticket-fields" },
  { id: 9, title: "Automating the helpdesk", slug: "automating-helpdesk" },
  { id: 10, title: "CRM and usergroups", slug: "crm-and-usergroups" },
  { id: 11, title: "Portal", slug: "portal" },
  { id: 12, title: "Multibrand", slug: "multibrand" },
  { id: 13, title: "Editing templates", slug: "editing-templates" },
  { id: 14, title: "Localization", slug: "localization" },
  { id: 15, title: "Integration", slug: "integration" },
  { id: 16, title: "Labels", slug: "labels" },
  { id: 17, title: "Billing", slug: "billing" }
];

const SectionsDemo = () => {
  const [data, setData] = React.useState(sections);

  const handleReorder = React.useCallback(
    (id, nextIndex) => {
      const oldIndex = data.findIndex(i => i.id === id);
      if (oldIndex) {
        const [removed] = data.splice(oldIndex, 1);
        data.splice(nextIndex, 0, removed);
        setData(data);
      }
    },
    [data]
  );

  return (
    <MemoryRouter>
      <Guides.Breadcrumbs
        homeSlug="home"
        items={[
          { id: 2, title: "Agent Guide", slug: "agent-guide" },
          {
            id: 3,
            title: "Launching your helpdesk",
            slug: "launching-helpdesk"
          }
        ]}
      />
      <OrderingBar>
        <OrderingBar.Item>
          <Icon name="grouped-by" size={19} />
          <span className="dp-SelectGroup">
            <span className="dp-ItemRow">
              <span className="dp-Title">Grouped by</span>
              <span className="dp-Arrow" />
            </span>
            <span className="dp-ItemRow">
              <span className="dp-Subtitle">None</span>
            </span>
          </span>
        </OrderingBar.Item>
        <OrderingBar.Item>
          <Icon name="sort" size={19} />
          <span className="dp-SelectGroup">
            <span className="dp-ItemRow">
              <span className="dp-Title">Sort by</span>
              <span className="dp-Arrow" />
            </span>
            <span className="dp-ItemRow">
              <span className="dp-Subtitle">Date</span>
            </span>
          </span>
        </OrderingBar.Item>
        <OrderingBar.Item>
          <Icon name="faceted-by" size={19} />
          <span className="dp-SelectGroup">
            <span className="dp-ItemRow">
              <span className="dp-Title">Faceted by</span>
              <span className="dp-Arrow" />
            </span>
            <span className="dp-ItemRow">
              <span className="dp-Subtitle">3 Agents</span>
            </span>
          </span>
        </OrderingBar.Item>
        <OrderingBar.Item>
          <Icon name="fields" size={19} />
          <span className="dp-SelectGroup">
            <span className="dp-ItemRow">
              <span className="dp-Title">Fields</span>
              <span className="dp-Arrow" />
            </span>
            <span className="dp-ItemRow">
              <span className="dp-Subtitle">8 fields</span>
            </span>
          </span>
        </OrderingBar.Item>
      </OrderingBar>
      <Guides
        items={data}
        reorderable
        kind="sections"
        onSettingsClick={action()}
        onReorder={handleReorder}
      />
    </MemoryRouter>
  );
};

export default SectionsDemo;
