import React from "react";

import { storiesOf } from "@storybook/react";
import { Checkbox } from "@deskpro/agent-interface-components";

storiesOf("Forms", module).add("Checkboxes", () => (
  <>
    <h2>Checkboxes</h2>
    <div style={{ padding: "10px 0" }}>
      <Checkbox id="check-1" />
    </div>
    <div style={{ padding: "10px 0" }}>
      <Checkbox id="check-2" label="Custom Checkbox" />
    </div>
    <div style={{ padding: "10px 0" }}>
      <Checkbox id="check-3" label="Checked Checkbox" checked />
    </div>
    <div style={{ padding: "10px 0" }}>
      <Checkbox id="check-4" label="Undefined Checkbox" checked undef />
    </div>
  </>
));
