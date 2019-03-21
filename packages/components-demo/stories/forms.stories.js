import React from "react";

import { storiesOf } from "@storybook/react";
import {
  Checkbox,
  Input,
  Radio,
  RadioGroup
} from "@deskpro/agent-interface-components";

storiesOf("Forms", module)
  .add("Checkboxes", () => (
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
  ))
  .add("Input", () => (
    <>
      <h2>Inputs</h2>
      <div style={{ padding: "10px 0" }}>
        <Input placeholder="Enter your name.." />
      </div>
      <div style={{ padding: "10px 0" }}>
        <Input placeholder="Type keyword.." type="search" icon="filter" />
      </div>
      <div style={{ padding: "10px 0" }}>
        <Input
          value="John"
          icon="avatar"
          error="Must be at least 5 characters."
        />
      </div>
    </>
  ))
  .add("Radio", () => (
    <>
      <h2>Radios</h2>
      <div style={{ padding: "10px 0" }}>
        <Radio label="Option one" />
      </div>
      <div style={{ padding: "10px 0" }}>
        <RadioGroup>
          <Radio id="one" label="Option one" value="one" />
          <Radio id="two" label="Option two" value="two" />
          <Radio id="three" label="Option three" value="three" />
        </RadioGroup>
      </div>
    </>
  ));
