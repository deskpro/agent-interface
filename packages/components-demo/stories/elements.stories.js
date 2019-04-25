import React from "react";

import { storiesOf } from "@storybook/react";

import {
  BadgeCopy,
  Header,
  Account,
  AgentIM,
  AgentStatus,
  Notifications,
  Recent
} from "@deskpro/agent-interface-components";
import { action } from "@storybook/addon-actions";
import FieldGroupingListDemo from "./components/elements/FieldGroupingListDemo";
import FollowersDemo from "./components/elements/FollowersDemo";

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
  ))
  .add("Header", () => (
    <div style={{ padding: 15, backgroundColor: "#eee" }}>
      <Header
        onSearch={action()}
        left={
          <>
            <Recent />
            <AgentIM />
          </>
        }
        right={
          <>
            <Notifications />
            <AgentStatus />
            <Account />
          </>
        }
      />
    </div>
  ))
  .add("Followers", () => (
    <div style={{ maxWidth: 450 }}>
      <FollowersDemo count={10} />
      <br />
      <br />
      <FollowersDemo count={26} />
    </div>
  ));
