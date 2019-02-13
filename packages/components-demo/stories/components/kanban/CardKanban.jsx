import React from "react";
import PropTypes from "prop-types";

import {
  Kanban,
  Card,
  UserInfo,
  Menu,
  ContextMenuProvider
} from "@deskpro/agent-interface-components";
import useKanbanDragging from "./useSimpleKanban";

const CardKanban = ({ action }) => {
  const { cards, onDragEnd } = useKanbanDragging();

  return (
    <ContextMenuProvider>
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
                        cardId={idx}
                        title={title}
                        isDragging={isDragging}
                        checkable
                        onCheck={action("click 11")}
                        statusLabel="1h 25 min"
                        renderCogMenu={menuProps => (
                          <Menu {...menuProps}>
                            <Menu.MenuItem key="bin" icon="bin" text="Delete" />
                          </Menu>
                        )}
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
    </ContextMenuProvider>
  );
};

CardKanban.propTypes = {
  action: PropTypes.func.isRequired
};

export default CardKanban;
