import React from "react";
import PropTypes from "prop-types";
import produce from "immer";

import {
  StandardKanban,
  Card,
  UserInfo,
  Menu
} from "@deskpro/agent-interface-components";

const columns = ["Backlog", "Started", "In Progress", "Review", "QA", "Closed"];

const kanbanReducer = produce((draft, { type, payload }) => {
  switch (type) {
    case "loadData":
      return columns.reduce((acc, column, columnIndex) => {
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

const StandardKanbanDemo = ({ action }) => {
  const [data, dispatch] = React.useReducer(kanbanReducer, [], {
    type: "loadData"
  });

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <StandardKanban
        className="Kanban--cards"
        data={data}
        onDragEnd={payload => dispatch({ type: "moveItem", payload })}
        onLoadMore={group => dispatch({ type: "loadMore", payload: group })}
        renderCard={card => (
          <Card.TicketCard
            model={card}
            checkable
            onCheck={action(`toggle check for ${card.title}`)}
            renderBody={() => (
              <UserInfo avatar name="John Doe" email="john.doe@deskpro.com" />
            )}
            statusLabel="1h 25 min"
            cogMenu={
              <Menu>
                <Menu.MenuItem key="bin" icon="bin" text="Delete" />
              </Menu>
            }
          />
        )}
      />
    </div>
  );
};

StandardKanbanDemo.propTypes = {
  action: PropTypes.func.isRequired
};

export default StandardKanbanDemo;