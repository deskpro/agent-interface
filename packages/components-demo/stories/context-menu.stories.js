import React from "react";
import { subHours } from "date-fns";
import ReactAvatar from "react-avatar";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import {
  ContextMenu,
  StandardContextMenu,
  Menu,
  Card,
  Icon,
  ActionsButton
} from "@deskpro/agent-interface-components";

storiesOf("ContextMenu", module)
  .add("ContextMenu", () => (
    <ContextMenu
      renderMenu={menuProps => (
        <Menu {...menuProps} title="Context Menu" withFilter>
          <Menu.MenuItem
            name="rollover"
            text="Rollover menu item"
            icon="lock"
            onClick={action()}
          />
          <Menu.MenuItem
            name="item2"
            text="List item"
            icon="on-hold"
            onClick={action()}
          />
          <Menu.Divider />
          <Menu.MenuItem
            name="item3"
            text="Delete"
            icon="bin"
            onClick={action()}
          />
        </Menu>
      )}
    >
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
    </ContextMenu>
  ))
  .add("StandardContextMenu", () => (
    <StandardContextMenu
      items={[
        { text: "Copy", icon: "copy", name: "copy" },
        { text: "Paste", icon: "past", name: "past" }
      ]}
      onItemClick={action("Standard context menu item click")}
    >
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
    </StandardContextMenu>
  ))
  .add("Card Cog Menu", () => (
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
              <Menu.MenuItem name="assignee" text="Assignee">
                <Menu withFilter isCheckable>
                  <Menu.MenuItem
                    key="berdyshev"
                    name="berdyshev"
                    icon={
                      <ReactAvatar
                        email="berdartem@gmail.com"
                        name="Artem Berdyshev"
                        round
                        size={13}
                      />
                    }
                    text="Artem Berdyshev"
                  />
                  <Menu.MenuItem
                    key="chris"
                    name="chris"
                    icon={
                      <ReactAvatar
                        email="chris.nadeau@deskpro.com"
                        name="Chris Nadeau"
                        round
                        size={13}
                      />
                    }
                    text="Chris Nadeau"
                  />
                </Menu>
              </Menu.MenuItem>
              <Menu.MenuItem name="status" text="Status">
                <Menu isCheckable>
                  <Menu.MenuItem name="opened" text="Opened" />
                  <Menu.MenuItem name="in-progress" text="In Progress" />
                  <Menu.MenuItem name="closed" text="Closed" />
                </Menu>
              </Menu.MenuItem>
              <Menu.Divider />
              <Menu.MenuItem name="hold" text="Hold" />
              <Menu.MenuItem name="unhold" text="Unhold" />
              <Menu.MenuItem name="delete" text="Delete" />
            </Menu>
          )}
        >
          Hover the card to see a cog menu.
        </Card.TicketCard>
      </Card.List>
    </div>
  ))
  .add("Actions Button", () => (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-start",
          padding: "10px"
        }}
      >
        <ActionsButton
          renderMenu={menuProps => (
            <Menu {...menuProps}>
              <Menu.MenuItem
                name="copy"
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
          renderMenu={menuProps => (
            <Menu {...menuProps}>
              <Menu.MenuItem
                name="copy"
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
    </>
  ));
