import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { OptionList, Menu } from "@deskpro/agent-interface-components";
import OptionListDemo from "./components/list-pane/OptionListDemo";

storiesOf("OrderingBar", module)
  .add("Option List", () => (
    <OptionList name="fields" checkable sortable onItemMove={action()}>
      <OptionList.Item name="agent" title="Agent" disabled checked />
      <OptionList.Item name="title" title="Title" disabled checked />
      <OptionList.Item name="user" title="User" disabled checked />
      <OptionList.Item name="agent_team" title="Agent Team" checked />
      <OptionList.Item name="labels" title="Labels" />
      <OptionList.Item name="id" title="ID" />
      <OptionList.Item name="status" title="Status" />
      <OptionList.Item name="language" title="Language" />
      <OptionList.Item name="department" title="Department" />
      <OptionList.Item name="product" title="Product" />
      <OptionList.Item name="organization" title="Organization" />
      <OptionList.Item name="sla" title="SLAs" />
      <OptionList.Item name="user_waiting" title="User waiting" />
      <OptionList.Item
        name="created"
        title="Date created"
        showGear
        renderGearMenu={menuProps => (
          <Menu {...menuProps} isCheckable checkedItems={["created.date_only"]}>
            <Menu.MenuItem name="created.date_only" text="Date" />
            <Menu.MenuItem name="created.date_time" text="Date/Time" />
            <Menu.MenuItem name="created.time_ago" text="How long since" />
          </Menu>
        )}
      />
      <OptionList.Item
        name="waiting_time"
        title="All waiting time"
        showGear
        renderGearMenu={menuProps => (
          <Menu
            {...menuProps}
            isCheckable
            checkedItems={["waiting_time.date_only"]}
          >
            <Menu.MenuItem name="waiting_time.date_only" text="Date" />
            <Menu.MenuItem name="waiting_time.date_time" text="Date/Time" />
            <Menu.MenuItem name="waiting_time.time_ago" text="How long since" />
          </Menu>
        )}
      />
      <OptionList.Item
        name="last_reply"
        title="Date of last reply"
        showGear
        renderGearMenu={menuProps => (
          <Menu
            {...menuProps}
            isCheckable
            checkedItems={["last_reply.date_only"]}
          >
            <Menu.MenuItem name="last_reply.date_only" text="Date" />
            <Menu.MenuItem name="last_reply.date_time" text="Date/Time" />
            <Menu.MenuItem name="last_reply.time_ago" text="How long since" />
          </Menu>
        )}
      />
      <OptionList.Item
        name="last_user_reply"
        title="Date of last user reply"
        checked
        disabled
        showGear
        renderGearMenu={menuProps => (
          <Menu
            {...menuProps}
            isCheckable
            checkedItems={["last_user_reply.date_only"]}
          >
            <Menu.MenuItem name="last_user_reply.date_only" text="Date" />
            <Menu.MenuItem name="last_user_reply.date_time" text="Date/Time" />
            <Menu.MenuItem
              name="last_user_reply.time_ago"
              text="How long since"
            />
          </Menu>
        )}
      />
      <OptionList.Item
        name="last_agent_reply"
        title="Date of last agent reply"
        checked
        disabled
        showGear
        renderGearMenu={menuProps => (
          <Menu
            {...menuProps}
            isCheckable
            checkedItems={["last_agent_reply.date_only"]}
          >
            <Menu.MenuItem name="last_agent_reply.date_only" text="Date" />
            <Menu.MenuItem name="last_agent_reply.date_time" text="Date/Time" />
            <Menu.MenuItem
              name="last_agent_reply.time_ago"
              text="How long since"
            />
          </Menu>
        )}
      />
      <OptionList.Item
        name="date_resolved"
        title="Date resolved"
        showGear
        renderGearMenu={menuProps => (
          <Menu
            {...menuProps}
            isCheckable
            checkedItems={["date_resolved.date_only"]}
          >
            <Menu.MenuItem name="date_resolved.date_only" text="Date" />
            <Menu.MenuItem name="date_resolved.date_time" text="Date/Time" />
            <Menu.MenuItem
              name="date_resolved.time_ago"
              text="How long since"
            />
          </Menu>
        )}
      />
      <OptionList.Item name="problem" title="Problem" />
    </OptionList>
  ))
  .add("Standard OptionList", () => <OptionListDemo />);
