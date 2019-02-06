import React from "react";
import PropTypes from "prop-types";

import { Kanban } from "@deskpro/agent-interface-components";

const columns = ["Backlog", "Started", "In Progress", "Review", "QA", "Closed"];

function useKanbanDragging() {
  const [cards, setCards] = React.useState(
    columns.reduce((acc, column) => {
      acc[column] = Array.from(
        { length: Math.round(Math.random() * 50) },
        (_, idx) => `${column}-${idx + 1}`
      );
      return acc;
    }, {})
  );

  const moveCard = (source, destination) => {
    const [sourceColumn] = source.droppableId.split("-");
    const [destColumn] = destination.droppableId.split("-");
    const sourceClone = Array.from(cards[sourceColumn]);
    const destClone = Array.from(cards[destColumn]);
    const [removed] = sourceClone.splice(source.index, 1);

    destClone.splice(destination.index, 0, removed);

    setCards({
      ...cards,
      [sourceColumn]: sourceClone,
      [destColumn]: destClone
    });
  };

  const reorderCards = (
    { droppableId, index: sourceIdx },
    { index: destIdx }
  ) => {
    const [sourceColumn] = droppableId.split("-");
    const result = Array.from(cards[sourceColumn]);
    const [removed] = result.splice(sourceIdx, 1);
    result.splice(destIdx, 0, removed);

    setCards({ ...cards, [sourceColumn]: result });
  };

  const onDragEnd = React.useCallback(
    result => {
      const { source, destination } = result;

      // dropped outside the list
      if (!destination) {
        return;
      }

      if (source.droppableId === destination.droppableId) {
        reorderCards(source, destination);
      } else {
        moveCard(source, destination);
      }
    },
    [cards]
  );

  return { cards, onDragEnd };
}

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
