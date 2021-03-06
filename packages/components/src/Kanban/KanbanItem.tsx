import * as React from "react";
import classNames from "classnames";
import { Draggable } from "react-beautiful-dnd";

import { KanbanContext } from "./Kanban";

export interface KanbanItemProvidedProps {
  isDragging?: boolean;
}

export type KanbanItemProps = {
  className?: string;
  itemId: React.Key;
  index?: number;
  children: (props?: KanbanItemProvidedProps) => React.ReactNode;
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
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            className={classNames("dp-Kanban-item", className, {
              "is-dragging": snapshot.isDragging
            })}
          >
            {children({ isDragging: snapshot.isDragging })}
          </div>
        )}
      </Draggable>
    );
  }

  return (
    <div className={classNames("dp-Kanban-item", className)}>{children()}</div>
  );
};

export default KanbanItem;
