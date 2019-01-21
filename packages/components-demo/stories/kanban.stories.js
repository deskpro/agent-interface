import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Kanban } from "@deskpro/agent-interface-components";
import "./styles.css";

const columns = ["Backlog", "Started", "In Progress", "Review", "QA", "Closed"];

storiesOf("Kanban", module).add("Kanban simple", () => (
  <div style={{ height: "100vh", width: "100vw" }}>
    <Kanban>
      {columns.map(column => (
        <Kanban.Column
          key={column}
          title={column}
          scrollThreshold={0.8}
          onThresholdReach={action(
            `scroll reached threshold for column ${column}`
          )}
        >
          {new Array(Math.round(Math.random() * 50)).fill(0).map(idx => (
            <Kanban.Item key={idx}>
              <div
                style={{
                  height: "50px",
                  border: "1px solid #ddd",
                  backgroundColor: "#eee"
                }}
              />
            </Kanban.Item>
          ))}
        </Kanban.Column>
      ))}
    </Kanban>
  </div>
));
