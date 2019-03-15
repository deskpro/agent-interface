import React from "react";
import { action } from "@storybook/addon-actions";
import uuid from "uuid";

import { Card } from "@deskpro/agent-interface-components";

function generateCardItems() {
  return Array.from({ length: 20 }, () => {
    const id = uuid();
    return {
      id,
      title: `Card #${id.substr(0, 8)}`
    };
  });
}

const actions = [
  { name: "approve", icon: "approve", title: "Approve" },
  { name: "delete", icon: "delete", title: "Delete" },
  { name: "create-ticket", icon: "create-ticket", title: "Create ticket" },
  { name: "edit", icon: "edit", title: "Edit" }
];

const CardActionsDemo = () => (
  <div style={{ maxWidth: 500 }}>
    <Card.List hoverable>
      {generateCardItems().map(({ id, title }) => (
        <Card.Simple
          key={id}
          cardId={id}
          title={title}
          checkable
          actions={actions}
          onActionClick={action()}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Card.Simple>
      ))}
    </Card.List>
  </div>
);

export default CardActionsDemo;
