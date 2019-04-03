import React from "react";

import { storiesOf } from "@storybook/react";
import { boolean, withKnobs } from "@storybook/addon-knobs";

import SimpleTableDemo from "./components/table/SimpleTableDemo";

storiesOf("Table", module)
  .addDecorator(withKnobs)
  .add("Simple Table", () => (
    <div style={{ width: "100%" }}>
      <SimpleTableDemo
        grouped={boolean("With Groups", false)}
        expandable={boolean("Expandable", false)}
      />
    </div>
  ));
