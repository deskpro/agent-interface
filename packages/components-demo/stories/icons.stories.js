import React from "react";

import { storiesOf } from "@storybook/react";

import { Icon } from "@deskpro/agent-interface-components";

storiesOf("Icons", module).add("Icons", () => (
  <>
    <Icon name="tickets" />
    <Icon name="tickets" color="primary" />
    <Icon name="chats" />
    <Icon name="crm" />
    <Icon name="feedback" />
    <Icon name="publish" />
    <Icon name="icontasks" />
    <Icon name="reports" />
    <Icon name="admin" />
    <Icon name="billing_money" />
    <Icon name="portal" />
    <Icon name="assets" />
    <Icon name="forms" />
    <Icon name="deal" />
    <Icon name="notifications" />
    <Icon name="notifications" color="dark" />
    <Icon name="notifications" color="primary" />
    <Icon name="grouped_by" />
    <Icon name="faceted_by" />
  </>
));
