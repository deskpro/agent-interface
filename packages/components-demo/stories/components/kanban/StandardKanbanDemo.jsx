import React from "react";
import PropTypes from "prop-types";
import produce from "immer";
import { subHours } from "date-fns";
import _findIndex from "lodash/findIndex";
import _findLastIndex from "lodash/findLastIndex";

import {
  StandardKanban,
  Card,
  Menu
} from "@deskpro/agent-interface-components";
import ReactAvatar from "react-avatar";

const columns = ["Backlog", "Started", "In Progress", "Review", "QA", "Closed"];

const initCards = () =>
  columns.reduce(
    (acc, column, columnIndex) =>
      acc.concat(
        Array.from(
          { length: Math.round(Math.random() * 20) || 1 },
          (_, idx) => ({
            group: { id: column, title: column },
            id: `${columnIndex}${idx}`,
            title: `Card #${columnIndex}${idx + 1}`
          })
        )
      ),
    []
  );

const kanbanReducer = produce((draft, { type, payload }) => {
  switch (type) {
    case "moveItem": {
      const { itemId, toGroupId, index } = payload;
      const itemIdx = _findIndex(draft, ["id", itemId]);
      if (itemIdx > 0) {
        const [moved] = draft.splice(itemIdx, 1);
        const newGroupStartIdx = _findIndex(draft, ["group.id", toGroupId]);
        if (newGroupStartIdx > 0) {
          moved.group = draft[newGroupStartIdx].group;
          draft.splice(newGroupStartIdx + index, 0, moved);
        } else {
          throw new Error(`Cannot find a group with ID ${toGroupId}`);
        }
      } else {
        throw new Error(`Missing item with ID ${itemId}`);
      }
      break;
    }

    case "loadMore": {
      const firstIdx = _findIndex(draft, ["group.id", payload.id]);
      const lastIdx = _findLastIndex(draft, ["group.id", payload.id]);
      if (firstIdx > 0 && lastIdx >= firstIdx) {
        const columnIdx = columns.indexOf(payload.title);
        const itemsCount = lastIdx - firstIdx + 1;
        for (let i = 0; i < 10; i += 1) {
          draft.splice(lastIdx + i, 0, {
            id: `${columnIdx}${itemsCount + i}`,
            title: `Card #${columnIdx}${itemsCount + i + 1}`,
            group: payload
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
        items={data}
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
