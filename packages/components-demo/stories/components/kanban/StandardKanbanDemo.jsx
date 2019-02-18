import React from "react";
import PropTypes from "prop-types";
import produce from "immer";
import { subHours } from "date-fns";

import {
  StandardKanban,
  Card,
  Menu,
  ContextMenuProvider
} from "@deskpro/agent-interface-components";

const columns = ["Backlog", "Started", "In Progress", "Review", "QA", "Closed"];

const initCards = () =>
  columns.reduce((acc, column, columnIndex) => {
    acc.push({
      group: { id: column, title: column },
      items: Array.from(
        { length: Math.round(Math.random() * 20) },
        (_, idx) => ({
          id: `${columnIndex}${idx}`,
          title: `Card #${columnIndex}${idx + 1}`
        })
      )
    });
    return acc;
  }, []);

const kanbanReducer = produce((draft, { type, payload }) => {
  switch (type) {
    case "moveItem": {
      const { itemId, fromGroupId, toGroupId, index } = payload;
      const sourceDataItem = draft.find(i => i.group.id === fromGroupId);
      const [moved] = sourceDataItem.items.splice(
        sourceDataItem.items.findIndex(i => i.id === itemId),
        1
      );
      const destDataItem = draft.find(i => i.group.id === toGroupId);
      destDataItem.items.splice(index, 0, moved);
      break;
    }

    case "loadMore": {
      const item = draft.find(i => i.group.id === payload.id);
      if (item) {
        const columnIdx = columns.indexOf(payload.title);
        const itemsCount = item.items.length;
        for (let i = 0; i < 10; i += 1) {
          item.items.push({
            id: `${columnIdx}${itemsCount + i}`,
            title: `Card #${columnIdx}${itemsCount + i + 1}`
          });
        }
      }
      break;
    }

    default:
      break;
  }
  // this is added because of linter to not complain that no return statement found.
  return undefined;
});

const StandardKanbanDemo = ({ action, allowReorder }) => {
  const [data, dispatch] = React.useReducer(kanbanReducer, [], initCards);

  return (
    <ContextMenuProvider>
      <div style={{ height: "100vh", width: "100vw" }}>
        <StandardKanban
          className="Kanban--cards"
          allowReorder={allowReorder}
          data={data}
          onDragEnd={payload => dispatch({ type: "moveItem", payload })}
          onLoadMore={group => dispatch({ type: "loadMore", payload: group })}
          renderCard={(card, { isDragging }) => (
            <Card.TicketCard
              cardId={card.id}
              title={card.title}
              isDragging={isDragging}
              checkable
              onCheck={action(`toggle check for ${card.title}`)}
              status={
                <Card.TicketCard.Status lastUpdate={subHours(new Date(), 2)} />
              }
              renderCogMenu={menuProps => (
                <Menu {...menuProps}>
                  <Menu.MenuItem key="bin" icon="bin" text="Delete" />
                </Menu>
              )}
            >
              <Card.TicketCard.Details
                user={{
                  name: "John Doe",
                  email: "john.doe@example.com",
                  avatar: true
                }}
              />
            </Card.TicketCard>
          )}
        />
      </div>
    </ContextMenuProvider>
  );
};

StandardKanbanDemo.propTypes = {
  action: PropTypes.func.isRequired
};

export default StandardKanbanDemo;
