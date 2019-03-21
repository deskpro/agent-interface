import React from "react";
import { action } from "@storybook/addon-actions";
import uuid from "uuid";
import uuidv5 from "uuid/v5";
import inPercy from "@percy-io/in-percy";

import { Card } from "@deskpro/agent-interface-components";

let seed = 1;

function generateCardItems() {
  return Array.from({ length: 20 }, () => {
    let id;
    if (!inPercy()) {
      id = uuid();
    } else {
      const namespace = "1b671a64-40d5-491e-99b0-da01ff1f3341";
      id = uuidv5(seed.toString(10), namespace);
      seed += 1;
    }
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
