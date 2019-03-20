import React from "react";

import {
  Card,
  Icon,
  Tag,
  Badge,
  ActivityStatus,
  IconGroup
} from "@deskpro/agent-interface-components";

export default ({ onCheck }) => (
  <div style={{ maxWidth: "500px" }}>
    <Card.List hoverable>
      <Card.SectionTitle>Card List Title</Card.SectionTitle>
      <Card.Simple cardId={1} title="Simple card (default, without checkbox)">
        Some details text
      </Card.Simple>
      <Card.Simple
        cardId={2}
        checkable
        onCheck={onCheck}
        title="Simple card (default, with checkbox)"
      >
        Some details text
      </Card.Simple>
      <Card.Simple
        cardId={3}
        checked
        checkable
        onCheck={onCheck}
        title="Simple card (checked) without details"
        status={<Tag>2 mins</Tag>}
      />
      <Card.Simple
        checkable
        onCheck={onCheck}
        isFocused
        title="Simple card (focused)"
        cardId={4}
      >
        Some details text
      </Card.Simple>
      <Card.Simple
        checkable
        onCheck={onCheck}
        isHighlighted
        title="Simple card (highlighted)"
        cardId={5}
      >
        Some details text
      </Card.Simple>
      <Card.Simple
        checkable
        onCheck={onCheck}
        title="Simple card (with status)"
        cardId={6}
        icons={
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
        Some details text
      </Card.Simple>
      <Card.Simple
        checkable
        onCheck={onCheck}
        title="Simple card (with tag)"
        cardId={7}
        status={
          <Tag color="danger" size="small">
            Failed
          </Tag>
        }
      >
        Some details text
      </Card.Simple>
    </Card.List>
  </div>
);
