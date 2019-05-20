import React from "react";

import { storiesOf } from "@storybook/react";
import { MemoryRouter, Route } from "@deskpro/agent-interface-components";

import ContentCategoriesDemo from "./components/content/ContentCategoriesDemo";

storiesOf("Content", module).add("Knowledgebase", () => (
  <MemoryRouter>
    <div style={{ display: "flex", width: "100%", height: "100%" }}>
      <Route path="/:slug?" component={ContentCategoriesDemo} />
    </div>
  </MemoryRouter>
));
