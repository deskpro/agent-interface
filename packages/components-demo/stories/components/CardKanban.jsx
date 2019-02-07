import React from "react";
import PropTypes from "prop-types";

import {
  Kanban,
  Card,
  UserInfo,
  Menu
} from "@deskpro/agent-interface-components";

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

const CardKanban = ({ action }) => {
  const { cards, onDragEnd } = useKanbanDragging();

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <Kanban className="Kanban--cards" draggable onDragEnd={onDragEnd}>
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
            <Card.List hoverable>
              {cards[column].map((title, idx) => (
                <Kanban.Item key={title} itemId={title} index={idx}>
                  {({ isDragging }) => (
                    <Card.TicketCard
                      model={{ id: idx, title }}
                      isDragging={isDragging}
                      checkable
                      onCheck={action("click 11")}
                      statusLabel="1h 25 min"
                      cogMenu={
                        <Menu>
                          <Menu.MenuItem key="bin" icon="bin" text="Delete" />
                        </Menu>
                      }
                    >
                      <UserInfo
                        avatar
                        name="John Doe"
                        email="john.doe@deskpro.com"
                      />
                    </Card.TicketCard>
                  )}
                </Kanban.Item>
              ))}
            </Card.List>
          </Kanban.Column>
        ))}
      </Kanban>
    </div>
  );
};

CardKanban.propTypes = {
  action: PropTypes.func.isRequired
};

export default CardKanban;
