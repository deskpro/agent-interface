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
          <Menu
            title="Menu Title"
            isVisible
            enableSearch
            items={[
              { name: "copy", icon: "copy", text: "Copy" },
              { name: "cut", icon: "scissors", text: "Cut" },
              {
                name: "paste",
                icon: "insert-link",
                text: "Paste",
                subItems: [
                  { name: "word", text: "From Word" },
                  { name: "text", text: "From Text" },
                  { name: "without-styles", text: "Without Styles" }
                ]
              }
            ]}
          />
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
          <Menu
            isVisible
            items={[
              { name: "lock", icon: "lock", text: "Lock" },
              { name: "hold", icon: "on-hold", text: "Put the ticket on hold" },
              { name: "delete", icon: "bin", text: "Delete" }
            ]}
          />
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
          <Menu
            isVisible
            items={[
              { name: "lock", icon: "lock", text: "Lock" },
              { name: "hold", icon: "on-hold", text: "Put the ticket on hold" },
              { name: "delete", icon: "bin", text: "Delete" }
            ]}
          />
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
