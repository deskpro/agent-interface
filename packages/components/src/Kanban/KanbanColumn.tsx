import * as React from "react";
import classNames from "classnames";
import { Droppable } from "react-beautiful-dnd";

import ScrollArea from "../ScrollArea/ScrollArea";
import { KanbanContext } from "./Kanban";

export type KanbanColumnProps = {
  className?: string;
  style?: object;
  title: string;
  scrollThreshold?: number;
  onThresholdReach?(): void;
};

const KanbanColumn: React.FC<KanbanColumnProps> = ({
  className,
  style,
  title,
  scrollThreshold,
  onThresholdReach,
  children
}) => {
  const { draggable } = React.useContext(KanbanContext);

  return (
    <div className={classNames("dp-Kanban-column", className)} style={style}>
      <div className="dp-Kanban-columnTitle">{title}</div>
      <ScrollArea
        className="dp-Kanban-columnContent"
        threshold={scrollThreshold}
        onTresholdReach={onThresholdReach}
      >
        {draggable ? (
          <Droppable droppableId={title}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                className={classNames("dp-Kanban-droppableArea", {
                  "is-over": snapshot.isDragOver
                })}
              >
                {children}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ) : (
          children
        )}
      </ScrollArea>
    </div>
  );
};

export default KanbanColumn;
