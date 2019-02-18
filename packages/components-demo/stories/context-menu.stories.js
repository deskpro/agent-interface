import React from "react";
import { subHours } from "date-fns";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import {
  ContextMenuArea,
  ContextMenuProvider,
  ContextMenu,
  Menu,
  Card,
  Icon,
  ActionsButton
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
  ))
  .add("Actions Button", () => (
    <ContextMenuProvider>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-start",
          padding: "10px"
        }}
      >
        <ActionsButton
          buttonId="actions-btn"
          renderMenu={menuProps => (
            <Menu {...menuProps}>
              <Menu.MenuItem
                icon="copy"
                text="Copy"
                onClick={action("copy action")}
              />
            </Menu>
          )}
        >
          <Icon name="lock" size={16} />
          Actions
        </ActionsButton>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-end",
          padding: "10px"
        }}
      >
        <ActionsButton
          buttonId="actions-btn-2"
          renderMenu={menuProps => (
            <Menu {...menuProps}>
              <Menu.MenuItem
                icon="copy"
                text="Copy by clicking this menu item"
                onClick={action("copy action")}
              />
            </Menu>
          )}
        >
          <Icon name="lock" size={16} />
          Actions
        </ActionsButton>
      </div>
    </ContextMenuProvider>
  ));
