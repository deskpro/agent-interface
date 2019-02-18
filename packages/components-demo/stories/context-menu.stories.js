import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import {
  ContextMenuArea,
  ContextMenuProvider,
  ContextMenu,
  Menu
} from "@deskpro/agent-interface-components";

storiesOf("ContextMenu", module).add("ContextMenu", () => (
  <ContextMenuProvider>
    <ContextMenuArea menuId="context-menu-1">
      <div
        style={{
          width: "500px",
          height: "300px",
          display: "flex",
          backgroundColor: "#ddd",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        Right click will open a context menu
      </div>
    </ContextMenuArea>
    <ContextMenu menuId="context-menu-1">
      <Menu.MenuItem
        key="copy"
        text="Copy"
        icon="copy"
        onClick={action("click copy")}
      />
      <Menu.MenuItem
        key="paste"
        text="Paste"
        icon="paste"
        onClick={action("click past")}
      />
    </ContextMenu>
  </ContextMenuProvider>
));
