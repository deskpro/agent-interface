import React from "react";
import sortBy from "lodash/sortBy";

import { Guides, MemoryRouter } from "@deskpro/agent-interface-components";
import { action } from "@storybook/addon-actions";

import guidesData from "./guides.json";

const guidesIcons = {
  4: "user",
  3: "reports",
  2: "owner",
  1: "support"
};
const guides = sortBy(guidesData.data, "display_order").map(g => ({
  ...g,
  icon: guidesIcons[g.id]
}));

const GuidesDemo = () => (
  <MemoryRouter>
    <Guides items={guides} onSettingsClick={action()} />
  </MemoryRouter>
);

export default GuidesDemo;
