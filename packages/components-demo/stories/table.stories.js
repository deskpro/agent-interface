import React from "react";

import { storiesOf } from "@storybook/react";

import SimpleTableDemo from "./components/table/SimpleTableDemo";

storiesOf("Table", module).add("Simple Table", () => (
  <div style={{ width: "100%" }}>
    <SimpleTableDemo />
  </div>
));
