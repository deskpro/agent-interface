import React from "react";
import PropTypes from "prop-types";
import produce from "immer";
import { subHours } from "date-fns";

import {
  StandardKanban,
  Card,
  Menu
} from "@deskpro/agent-interface-components";
import ReactAvatar from "react-avatar";

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

const StandardKanbanDemo = ({ allowReorder, checkable }) => {
  const [data, dispatch] = React.useReducer(kanbanReducer, [], initCards);

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <StandardKanban
        className="Kanban--cards"
        allowReorder={allowReorder}
        checkable={checkable}
        data={data}
        onDragEnd={payload => dispatch({ type: "moveItem", payload })}
        onLoadMore={group => dispatch({ type: "loadMore", payload: group })}
        renderCard={(
          card,
          { isDragging, isChecked, isCheckable, onCheckChange }
        ) => (
          <Card.TicketCard
            cardId={card.id}
            title={card.title}
            isDragging={isDragging}
            checkable={isCheckable}
            checked={isChecked}
            onCheck={onCheckChange}
            status={
              <Card.TicketCard.Status lastUpdate={subHours(new Date(), 2)} />
            }
            renderCogMenu={menuProps => (
              <Menu {...menuProps}>
                <Menu.MenuItem name="assign" icon="avatar" text="Assignee">
                  <Menu withFilter isCheckable>
                    <Menu.MenuItem
                      key="berdyshev"
                      name="berdyshev"
                      icon={
                        <ReactAvatar
                          email="berdartem@gmail.com"
                          name="Artem Berdyshev"
                          round
                          size={13}
                        />
                      }
                      text="Artem Berdyshev"
                    />
                    <Menu.MenuItem
                      key="chris"
                      name="chris"
                      icon={
                        <ReactAvatar
                          email="chris.nadeau@deskpro.com"
                          name="Chris Nadeau"
                          round
                          size={13}
                        />
                      }
                      text="Chris Nadeau"
                    />
                  </Menu>
                </Menu.MenuItem>
                <Menu.MenuItem name="bin" icon="bin" text="Delete" />
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
  );
};

StandardKanbanDemo.propTypes = {
  action: PropTypes.func.isRequired
};

export default StandardKanbanDemo;
