import React from "react";

import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";

import { Tabs, Menu } from "@deskpro/agent-interface-components";

storiesOf("Tabs", module)
  .add("Default Tabs", () => (
    <Tabs>
      <Tabs.TabItem key="1">File</Tabs.TabItem>
      <Tabs.TabItem key="2">Edit</Tabs.TabItem>
      <Tabs.TabItem
        key="3"
        renderMenu={() => (
          <Menu title="Menu Title" isVisible>
            <Menu.MenuItem key="lock" icon="lock" text="Copy" />
            <Menu.MenuItem key="cut" icon="scissors" text="Cut" />
            <Menu.MenuItem key="paste" icon="insert-link" text="Paste">
              <Menu>
                <Menu.MenuItem key="word" text="From Word" />
                <Menu.MenuItem key="text" text="From Text" />
                <Menu.MenuItem key="without-style" text="Without Styles" />
              </Menu>
            </Menu.MenuItem>
          </Menu>
        )}
      >
        View
      </Tabs.TabItem>
    </Tabs>
  ))
  .add("General Tabs", () => (
    <Tabs type="general">
      <Tabs.TabItem key="1" icon="add-tab" iconColor="success" iconOnly />
      <Tabs.TabItem key="2">
        <Tabs.TabTitle icon="email">First row</Tabs.TabTitle>
        <Tabs.TabSubtitle icon="avatar">Second row</Tabs.TabSubtitle>
      </Tabs.TabItem>
      <Tabs.TabItem key="3">
        <Tabs.TabTitle icon="email">First row</Tabs.TabTitle>
        <Tabs.TabSubtitle icon="avatar">Second row</Tabs.TabSubtitle>
      </Tabs.TabItem>
      <Tabs.TabItem key="4">
        <Tabs.TabTitle icon="portal">First row</Tabs.TabTitle>
        <Tabs.TabSubtitle icon={null}>Second row</Tabs.TabSubtitle>
      </Tabs.TabItem>
    </Tabs>
  ))
  .add("Icon Tabs", () => (
    <Tabs type="icons">
      <Tabs.TabItem key="1" icon="email" iconOnly />
      <Tabs.TabItem key="2" icon="user" iconOnly />
      <Tabs.TabItem key="3" icon="organisation" iconOnly />
    </Tabs>
  ))
  .add("Apps", () => (
    <Tabs type="apps">
      <Tabs.TabItem
        key="1"
        icon="document"
        renderMenu={() => (
          <Menu isVisible>
            <Menu.MenuItem key="lock" icon="lock" text="Lock" />
            <Menu.MenuItem
              key="hold"
              icon="on-hold"
              text="Put the ticket on hold"
            />
            <Menu.MenuItem key="delete" icon="bin" text="Delete" />
          </Menu>
        )}
      >
        <Tabs.TabTitle>Text</Tabs.TabTitle>
      </Tabs.TabItem>
      <Tabs.TabItem key="2" icon="document" renderMenu={() => null}>
        <Tabs.TabTitle>Text</Tabs.TabTitle>
      </Tabs.TabItem>
    </Tabs>
  ))
  .add("Actions", () => (
    <Tabs type="actions">
      <Tabs.TabItem
        key="1"
        icon="lock"
        renderMenu={() => (
          <Menu isVisible>
            <Menu.MenuItem key="lock" icon="lock" text="Lock" />
            <Menu.MenuItem
              key="hold"
              icon="on-hold"
              text="Put the ticket on hold"
            />
            <Menu.MenuItem key="delete" icon="bin" text="Delete" />
          </Menu>
        )}
      >
        Lock
      </Tabs.TabItem>
      <Tabs.TabItem key="2" icon="link" renderMenu={() => null}>
        Link
      </Tabs.TabItem>
      <Tabs.TabItem key="3" icon="plus" renderMenu={() => null}>
        New
      </Tabs.TabItem>
      <Tabs.TabItem key="4" icon="print" renderMenu={() => null}>
        Print
      </Tabs.TabItem>
      <Tabs.TabItem key="5" icon="ban" renderMenu={() => null}>
        Ban
      </Tabs.TabItem>
      <Tabs.TabItem key="6" icon="rocket" renderMenu={() => null}>
        Actions
      </Tabs.TabItem>
    </Tabs>
  ));
