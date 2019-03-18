import React from "react";

import { storiesOf } from "@storybook/react";
import FieldGroupingListDemo from "./components/elements/FieldGroupingListDemo";

storiesOf("Elements", module).add("Field Grouping List", () => (
  <div style={{ padding: "10px" }}>
    <FieldGroupingListDemo />
  </div>
));
