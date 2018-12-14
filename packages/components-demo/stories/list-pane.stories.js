import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import {
  Card,
  CardList,
  Icon,
  IconGroup,
  Tag,
  CardSectionTitle,
  Badge,
  UserInfo,
  Checkbox,
  ActivityStatus
} from "@deskpro/agent-interface-components";

storiesOf("ListPane", module).add("Card List", () => (
  <CardList hoverable>
    <CardSectionTitle>Sales</CardSectionTitle>
    <Card
      title="Card title here"
      selected
      onClick={action("click 1")}
      leftColumn={<Checkbox id="check-1" checked />}
      rightColumn={
        <>
          <IconGroup>
            <ActivityStatus status="viewing" color="grey">
              <Icon name="avatar" size={16} />
              <Icon name="avatar" size={16} />
            </ActivityStatus>
            <Icon name="beetle" size={18} circle />
            <Badge color="grey-light" type="round" />
            <Badge color="white" type="round" />
          </IconGroup>
          <span className="dp-TimeStatus">
            <Tag color="warning">Failed</Tag>
          </span>
        </>
      }
    >
      <UserInfo avatar name="John Doe" />
    </Card>
    <Card
      title="Card title here"
      onClick={action("click 1")}
      leftColumn={<Checkbox id="check-2" />}
      rightColumn={
        <>
          <IconGroup>
            <ActivityStatus status="writing" color="primary">
              <Icon name="avatar" size={15} />
              <Icon name="avatar" size={15} />
            </ActivityStatus>
            <Icon name="beetle" circle size={18} />
            <Badge color="neutral" type="round" />
          </IconGroup>
          <span className="dp-TimeStatus">5 min</span>
        </>
      }
    >
      <UserInfo avatar name="John Doe" email="john.doe@deskpro.com" />
    </Card>
    <Card
      title="Card title here"
      onClick={action("click 3")}
      leftColumn={<Checkbox id="check-3" />}
      rightColumn={
        <>
          <IconGroup>
            <ActivityStatus status="writing" color="primary">
              <Icon name="avatar" size={15} />
            </ActivityStatus>
            <Badge color="info" type="round" />
            <Badge color="success" type="round" />
          </IconGroup>
          <span className="dp-TimeStatus">1h 25 min</span>
        </>
      }
    >
      <UserInfo avatar name="John Doe" email="john.doe@deskpro.com" />
    </Card>
  </CardList>
));
