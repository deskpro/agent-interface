import React from "react";
import sortBy from "lodash/sortBy";
import filter from "lodash/filter";

import {
  Guides,
  OrderingBar,
  Icon,
  MemoryRouter
} from "@deskpro/agent-interface-components";
import { action } from "@storybook/addon-actions";

import topics from "./topics.json";

const sections = sortBy(filter(topics.data, ["parent", null]), "display_order");

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
