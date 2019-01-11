import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import {
  Card,
  Icon,
  Tag,
  Badge,
  UserInfo,
  ActivityStatus,
  Menu
} from "@deskpro/agent-interface-components";

storiesOf("ListPane", module).add("Card List", () => (
  <div style={{ maxWidth: "500px" }}>
    <Card.List hoverable>
      <Card.SectionTitle>Sales</Card.SectionTitle>
      <Card.TicketCard
        selected
        checkable
        onCheck={action("click 1")}
        model={{
          id: 1,
          title: "Card title here",
          isFavorite: true
        }}
        renderBody={() => <UserInfo avatar name="John Doe" />}
        icons={
          <>
            <ActivityStatus status="viewing" color="grey">
              <Icon name="avatar" size={16} />
              <Icon name="avatar" size={16} />
            </ActivityStatus>
            <Icon name="beetle" size={18} circle />
            <Badge color="grey-light" type="round" />
            <Badge color="white" type="round" />
          </>
        }
        statusLabel={<Tag color="warning">Failed</Tag>}
        cogMenu={
          <Menu>
            <Menu.MenuItem key="bin" icon="bin" text="Delete" />
          </Menu>
        }
      />
      <Card.TicketCard
        model={{
          id: 2,
          title: "Card title here"
        }}
        renderBody={() => (
          <UserInfo avatar name="John Doe" email="john.doe@deskpro.com" />
        )}
        checked
        checkable
        onCheck={action("click 2")}
        icons={
          <>
            <ActivityStatus status="writing" color="primary">
              <Icon name="avatar" size={15} />
              <Icon name="avatar" size={15} />
            </ActivityStatus>
            <Icon name="beetle" circle size={18} />
            <Badge color="neutral" type="round" />
          </>
        }
        statusLabel="5 min"
        cogMenu={
          <Menu>
            <Menu.MenuItem key="bin" icon="bin" text="Delete" />
          </Menu>
        }
      />
      <Card.TicketCard
        model={{
          id: 3,
          title: "Card title here"
        }}
        renderBody={() => (
          <UserInfo avatar name="John Doe" email="john.doe@deskpro.com" />
        )}
        checkable
        onCheck={action("click 3")}
        icons={
          <>
            <ActivityStatus status="writing" color="primary">
              <Icon name="avatar" size={15} />
            </ActivityStatus>
            <Badge color="info" type="round" />
            <Badge color="success" type="round" />
          </>
        }
        statusLabel="1h 25 min"
        cogMenu={
          <Menu>
            <Menu.MenuItem key="bin" icon="bin" text="Delete" />
          </Menu>
        }
      />
      <Card.SectionTitle>Tasks</Card.SectionTitle>
      <Card.TaskCard
        model={{ id: 11, title: "Create new task" }}
        checkable
        onCheck={action("click 11")}
        renderBody={() => (
          <a href="https://google.com/" className="dp-Card-link">
            <Icon name="link" color="primary" size={13} />
            Diagnose And Repair Electrical Systems
          </a>
        )}
      />
    </Card.List>
  </div>
));
