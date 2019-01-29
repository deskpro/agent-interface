import React from "react";
import PropTypes from "prop-types";

import {
  StandardKanban,
  Card,
  UserInfo,
  Menu
} from "@deskpro/agent-interface-components";
import produce from "immer";

const columns = ["Backlog", "Started", "In Progress", "Review", "QA", "Closed"];

function useKanbanDragging() {
  const [data, setData] = React.useState(
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
    }, [])
  );

  const onDragEnd = React.useCallback(
    ({ itemId, fromGroupId, toGroupId, index }) => {
      const nextData = produce(data, draft => {
        const sourceDataItem = draft.find(i => i.group.id === fromGroupId);
        const [moved] = sourceDataItem.items.splice(
          sourceDataItem.items.findIndex(i => i.id === itemId),
          1
        );
        const destDataItem = draft.find(i => i.group.id === toGroupId);
        destDataItem.items.splice(index, 0, moved);
      });
      setData(nextData);
    },
    [data]
  );

  return { data, onDragEnd };
}

const StandardKanbanDemo = ({ action }) => {
  const { data, onDragEnd } = useKanbanDragging();

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <StandardKanban
        className="Kanban--cards"
        data={data}
        onDragEnd={onDragEnd}
        onLoadMore={group =>
          action(`scroll reached threshold for group ${group.title}`)()
        }
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
