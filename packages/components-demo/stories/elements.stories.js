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
      <h2>Badges/ID</h2>
      <Badge type="id" label="#1234" /> <br />
      <Badge type="id" label="#1234">
        <Icon name="bin" size={10} />
        <Icon name="link" size={10} />
      </Badge>
      <h2>Badges/filter-pill</h2>
      <Badge type="filterPill" label="All" value={80} />
      <h2>Badges/pill</h2>
      <div className="dp-BadgesWrapper">
        <Badge type="pill" color="white" label="White" />
        <Badge type="pill" color="primary" label="Primary" />
        <Badge type="pill" color="neutral" label="Neutral" />
        <Badge type="pill" color="grey" label="Grey" />
        <Badge type="pill" color="purple" label="Purple" />
        <Badge type="pill" color="pink" label="Pink" />
        <Badge type="pill" color="danger" label="danger" />
        <Badge type="pill" color="warning" label="Warning" />
        <Badge type="pill" color="success" label="Success" />
        <Badge type="pill" color="info" label="Info" />
      </div>
      <h2>Badges/round</h2>
      <div className="dp-BadgesWrapper">
        <Badge type="round" color="danger" value="1" />
        <Badge type="round" color="warning" value="2" />
        <Badge type="round" color="warning-light" />
        <Badge type="round" color="empty" />
        <Badge type="round" color="white" value="10" />
        <Badge type="round" color="purple" value="20" />
        <Badge type="round" color="pink">
          <Icon name="new" size={16} color="white" />
        </Badge>
      </div>
    </>
  ));
