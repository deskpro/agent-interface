import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import {
  Card,
  Icon,
  Tag,
  Badge,
  ActivityStatus,
  IconGroup
} from "@deskpro/agent-interface-components";

storiesOf("ListPane", module).add("Card List", () => (
  <div style={{ maxWidth: "500px" }}>
    <Card.List hoverable>
      <Card.SectionTitle>Card List Title</Card.SectionTitle>
      <Card.Simple
        title="Simple card (default, without checkbox)"
        model={{ id: 1 }}
      >
        <p className="dp-UserName">Some details text</p>
      </Card.Simple>
      <Card.Simple
        checkable
        onCheck={action("check default")}
        title="Simple card (default, with checkbox)"
        model={{ id: 1 }}
      >
        <p className="dp-UserName">Some details text</p>
      </Card.Simple>
      <Card.Simple
        checked
        checkable
        onCheck={action("check checked")}
        title="Simple card (checked) without details"
        model={{ id: 2 }}
        status={<Tag>2 mins</Tag>}
      />
      <Card.Simple
        checkable
        onCheck={action("check")}
        isFocused
        title="Simple card (focused)"
        model={{ id: 3 }}
      >
        <p className="dp-UserName">Some details text</p>
      </Card.Simple>
      <Card.Simple
        checkable
        onCheck={action("check")}
        isHighlighted
        title="Simple card (highlighted)"
        model={{ id: 3 }}
      >
        <p className="dp-UserName">Some details text</p>
      </Card.Simple>
      <Card.Simple
        checkable
        onCheck={action("check")}
        title="Simple card (with status)"
        model={{ id: 4 }}
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
        model={{ id: 4 }}
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
));
