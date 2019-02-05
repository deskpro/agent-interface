import * as React from "react";
import classNames from "classnames";
import { Draggable } from "react-beautiful-dnd";

import { KanbanContext } from "./Kanban";

export type KanbanItemDraggingState = {
  isDragging?: boolean;
  isShadow?: boolean;
};

export type KanbanItemProps = {
  className?: string;
  itemId: React.Key;
  index?: number;
  children: (state?: KanbanItemDraggingState) => React.ReactNode;
};

const KanbanItem: React.FC<KanbanItemProps> = ({
  className,
  itemId,
  children,
  index
}) => {
  const { draggable } = React.useContext(KanbanContext);

  if (draggable) {
    return (
      <Draggable draggableId={itemId} index={index}>
        {(provided, snapshot) => (
          <>
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              className={classNames("dp-Kanban-item", className, {
                "is-dragging": snapshot.isDragging,
                "is-over":
                  provided.draggableProps.style &&
                  provided.draggableProps.style.transform
              })}
            >
              {children({ isDragging: snapshot.isDragging })}
            </div>
            {snapshot.isDragging && (
              <div
                className={classNames("dp-Kanban-item", className, "is-shadow")}
              >
                {children({ isShadow: true })}
              </div>
            )}
          </>
        )}
      </Draggable>
    );
  }

  return (
    <div className={classNames("dp-Kanban-item", className)}>{children()}</div>
  );
};

export default KanbanItem;
