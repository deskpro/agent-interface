import React from "react";
import { subHours } from "date-fns";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import {
  ContextMenuArea,
  ContextMenuProvider,
  ContextMenu,
  Menu,
  Card
} from "@deskpro/agent-interface-components";

storiesOf("ContextMenu", module)
  .add("ContextMenu", () => (
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
  ))
  .add("Card Cog Menu", () => (
    <ContextMenuProvider>
      <div style={{ maxWidth: "400px" }}>
        <Card.List hoverable>
          <Card.TicketCard
            cardId={11}
            title="Card Cog Demo"
            status={
              <Card.TicketCard.Status lastUpdate={subHours(new Date(), 1)} />
            }
            renderCogMenu={menuProps => (
              <Menu {...menuProps}>
                <Menu.MenuItem key="bin" icon="bin" text="Delete" />
              </Menu>
            )}
          >
            Hover the card to see a cog menu.
          </Card.TicketCard>
        </Card.List>
      </div>
    </ContextMenuProvider>
  ));
