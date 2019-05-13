import React from "react";

import { storiesOf } from "@storybook/react";

import SectionsDemo from "./components/guides/SectionsDemo";
import TopicsDemo from "./components/guides/TopicsDemo";
import GuidesDemo from "./components/guides/GuidesDemo";

storiesOf("Guides", module)
  .add("Guides", () => (
    <div style={{ width: 450 }}>
      <GuidesDemo />
    </div>
  ))
  .add("Sections", () => (
    <div style={{ width: 450 }}>
      <SectionsDemo />
    </div>
  ))
  .add("Topics", () => (
    <div style={{ width: 450 }}>
      <TopicsDemo />
    </div>
  ));
