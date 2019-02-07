import React from "react";
import PropTypes from "prop-types";

import { Kanban } from "@deskpro/agent-interface-components";
import useKanbanDragging from "./useSimpleKanban";

const Card = ({ children }) => (
  <div
    style={{
      height: "50px",
      border: "1px solid #ddd",
      backgroundColor: "#eee",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"
    }}
  >
    {children}
  </div>
);

const SimpleKanban = ({ action }) => {
  const { cards, onDragEnd } = useKanbanDragging();

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Kanban className="Kanban--demo" draggable onDragEnd={onDragEnd}>
        {Object.keys(cards).map(column => (
          <Kanban.Column
            key={column}
            columnId={column}
            header={column}
            scrollThreshold={0.8}
            onThresholdReach={action(
              `scroll reached threshold for column ${column}`
            )}
          >
            {cards[column].map((card, idx) => (
              <Kanban.Item key={card} itemId={card} index={idx}>
                {() => <Card>{card}</Card>}
              </Kanban.Item>
            ))}
          </Kanban.Column>
        ))}
      </Kanban>
    </div>
  );
};

SimpleKanban.propTypes = {
  action: PropTypes.func.isRequired
};

export default SimpleKanban;
