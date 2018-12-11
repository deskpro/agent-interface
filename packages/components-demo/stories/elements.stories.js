import React from "react";

import { storiesOf } from "@storybook/react";

import { Tag, Badge, Icon } from "@deskpro/agent-interface-components";

storiesOf("Elements", module)
  .add("Tags", () => (
    <>
      <h2>Tags</h2>
      <div className="dp-ElementsWrapper">
        <Tag>Default</Tag>
        <Tag>
          Default
          <Icon name="close" size={6} color="active" />
        </Tag>
        <Tag color="white">White</Tag>
        <Tag color="transparent">Transparent</Tag>
        <Tag color="disabled">Disabled</Tag>
        <Tag color="purple">Purple</Tag>
        <Tag color="pink">Pink</Tag>
        <Tag color="warning">Warning</Tag>
        <Tag color="success">Success</Tag>
      </div>
      <h2>Tag Sizes</h2>
      <div className="dp-ElementsWrapper">
        <Tag size="small">Small</Tag>
        <Tag>Default</Tag>
        <Tag size="medium">Medium</Tag>
      </div>
    </>
  ))
  .add("Badges", () => (
    <>
      <h2>Badges</h2>
      <div className="dp-BadgesWrapper">
        <Badge color="danger">1</Badge>
        <Badge color="warning">2</Badge>
        <Badge color="warningLight" />
        <Badge color="empty" />
        <Badge color="white">10</Badge>
        <Badge color="yellow">10</Badge>
        <Badge color="yellow">
          <Icon name="new" size={16} color="white" />
        </Badge>
      </div>
    </>
  ));
