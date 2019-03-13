import React from "react";
import { storiesOf } from "@storybook/react";

import PageTabsDemo from "./components/tabs/PageTabsDemo";

storiesOf("Tabs", module).add("Page Tabs", () => (
  <>
    <h2>Page Tabs (1 item)</h2>
    <PageTabsDemo full={false} />
    <br />
    <h2>Page Tabs (with collapse)</h2>
    <PageTabsDemo full />
  </>
));
