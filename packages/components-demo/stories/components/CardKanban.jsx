import React from "react";
import PropTypes from "prop-types";

import {
  Kanban,
  Card,
  UserInfo,
  Menu
} from "@deskpro/agent-interface-components";
import useKanbanDragging from "./useSimpleKanban";

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
