import React from "react";

import { storiesOf } from "@storybook/react";

import { BadgeCopy } from "@deskpro/agent-interface-components";
import FieldGroupingListDemo from "./components/elements/FieldGroupingListDemo";

storiesOf("Elements", module)
  .add("Field Grouping List", () => (
    <div style={{ padding: "10px" }}>
      <FieldGroupingListDemo />
    </div>
  ))
  .add("Badge ID", () => (
    <div style={{ padding: 10 }}>
      <BadgeCopy value="1234" />
    </div>
  ));
