import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, number, boolean } from "@storybook/addon-knobs";

import {
  Card,
  Icon,
  Tag,
  Badge,
  ActivityStatus,
  IconGroup
} from "@deskpro/agent-interface-components";
import PaginationDemo from "./components/PaginationDemo";

storiesOf("ListPane", module)
  .addDecorator(withKnobs)
  .add("Card List", () => (
    <div style={{ maxWidth: "500px" }}>
      <Card.List hoverable>
        <Card.SectionTitle>Card List Title</Card.SectionTitle>
        <Card.Simple cardId={1} title="Simple card (default, without checkbox)">
          <p className="dp-UserName">Some details text</p>
        </Card.Simple>
        <Card.Simple
          cardId={2}
          checkable
          onCheck={action("check default")}
          title="Simple card (default, with checkbox)"
        >
          <p className="dp-UserName">Some details text</p>
        </Card.Simple>
        <Card.Simple
          cardId={3}
          checked
          checkable
          onCheck={action("check checked")}
          title="Simple card (checked) without details"
          status={<Tag>2 mins</Tag>}
        />
        <Card.Simple
          checkable
          onCheck={action("check")}
          isFocused
          title="Simple card (focused)"
          cardId={4}
        >
          <p className="dp-UserName">Some details text</p>
        </Card.Simple>
        <Card.Simple
          checkable
          onCheck={action("check")}
          isHighlighted
          title="Simple card (highlighted)"
          cardId={5}
        >
          <p className="dp-UserName">Some details text</p>
        </Card.Simple>
        <Card.Simple
          checkable
          onCheck={action("check")}
          title="Simple card (with status)"
          cardId={6}
          status={
            <IconGroup>
              <ActivityStatus status="viewing" color="grey">
                <Icon name="avatar" size={16} />
                <Icon name="avatar" size={16} />
              </ActivityStatus>
              <Icon name="beetle" size={18} circle />
              <Badge color="grey-light" type="round" />
              <Badge color="purple" type="round" />
            </IconGroup>
          }
        >
          <p className="dp-UserName">Some details text</p>
        </Card.Simple>
        <Card.Simple
          checkable
          onCheck={action("check")}
          title="Simple card (with tag)"
          cardId={7}
          status={
            <Tag color="danger" size="small">
              Failed
            </Tag>
          }
        >
          <p className="dp-UserName">Some details text</p>
        </Card.Simple>
      </Card.List>
    </div>
  ))
  .add("Pagination", () => (
    <PaginationDemo
      numPages={number("Pages count", 75)}
      proximity={number("Proximity", 2)}
      showGotoPage={boolean("Show 'Go to page'", true)}
    />
  ));
