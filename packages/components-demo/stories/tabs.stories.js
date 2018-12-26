import React from "react";

import { storiesOf } from "@storybook/react";
// import { action } from "@storybook/addon-actions";

import { Tabs, Menu } from "@deskpro/agent-interface-components";

storiesOf("Tabs", module)
  .add("Default Tabs", () => (
    <Tabs>
      <Tabs.TabItem key="1" label="File" />
      <Tabs.TabItem key="2" label="Edit" />
      <Tabs.TabItem
        key="3"
        label="View"
        renderMenu={() => (
          <Menu
            title="Menu Title"
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
      />
    </Tabs>
  ))
  .add("General Tabs", () => (
    <Tabs type="general">
      <Tabs.TabItem key="1" label="Lock" icon="lock" />
      <Tabs.TabItem key="2" label="Link" icon="link" />
      <Tabs.TabItem key="3" label="New" icon="plus" />
      <Tabs.TabItem key="4" label="Print" />
      <Tabs.TabItem key="5" label="Ban" icon="ban" />
      <Tabs.TabItem key="6" label="Actions" />
    </Tabs>
  ))
  .add("Actions", () => (
    <Tabs type="actions">
      <Tabs.TabItem
        key="1"
        label="Lock"
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
      />
      <Tabs.TabItem key="2" label="Link" icon="link" renderMenu={() => null} />
      <Tabs.TabItem key="3" label="New" icon="plus" renderMenu={() => null} />
      <Tabs.TabItem
        key="4"
        label="Print"
        icon="print"
        renderMenu={() => null}
      />
      <Tabs.TabItem key="5" label="Ban" icon="ban" renderMenu={() => null} />
      <Tabs.TabItem
        key="6"
        label="Actions"
        icon="rocket"
        renderMenu={() => null}
      />
    </Tabs>
  ));
