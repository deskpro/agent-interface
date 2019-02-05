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

const KanbanColumnLayout: React.FC<KanbanColumnProps> = ({
  className,
  style,
  title,
  scrollThreshold,
  onThresholdReach,
  children
}) => (
  <div className={classNames("dp-Kanban-column", className)} style={style}>
    <div className="dp-Kanban-columnTitle">{title}</div>
    <ScrollArea
      className="dp-Kanban-columnContent"
      threshold={scrollThreshold}
      onTresholdReach={onThresholdReach}
    >
      {children}
    </ScrollArea>
  </div>
);

const KanbanColumn: React.FC<KanbanColumnProps> = ({
  className,
  children,
  ...props
}) => {
  const { draggable, disabledDroppable } = React.useContext(KanbanContext);

  if (draggable) {
    return (
      <Droppable
        droppableId={props.title}
        isDropDisabled={disabledDroppable === props.title}
      >
        {(provided, snapshot) => (
          <KanbanColumnLayout
            className={classNames(className, {
              "is-over": snapshot.isDraggingOver,
              "is-active": snapshot.isDraggingOver && !!disabledDroppable
            })}
            {...props}
          >
            <div ref={provided.innerRef} className="dp-Kanban-droppableArea">
              {children}
              {provided.placeholder}
            </div>
          </KanbanColumnLayout>
        )}
      </Droppable>
    );
  }

  return (
    <KanbanColumnLayout className={className} {...props}>
      {children}
    </KanbanColumnLayout>
  );
};

export default KanbanColumn;
