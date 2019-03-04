import * as React from "react";
import classNames from "classnames";
import { Droppable } from "react-beautiful-dnd";

import ScrollArea from "../ScrollArea/ScrollArea";
import { KanbanContext } from "./Kanban";
import Checkbox from "../inputs/Checkbox/Checkbox";

export type KanbanColumnProps = {
  className?: string;
  style?: object;
  columnId: React.Key;
  header: React.ReactNode;
  scrollThreshold?: number;
  onThresholdReach?(): void;
  checkable?: boolean;
  checked?: boolean | null;
  onCheckChange?: (e: React.SyntheticEvent) => void;
};

const KanbanColumnLayout: React.FC<KanbanColumnProps> = ({
  className,
  style,
  header,
  scrollThreshold,
  onThresholdReach,
  checkable = false,
  checked = false,
  onCheckChange,
  children
}) => (
  <div className={classNames("dp-Kanban-column", className)} style={style}>
    {typeof header === "string" ? (
      <div className="dp-Kanban-columnTitle">
        {checkable && (
          <Checkbox
            id={header}
            checked={!!checked}
            undef={checked === null}
            onChange={onCheckChange}
          />
        )}
        {header}
      </div>
    ) : (
      header
    )}
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
        droppableId={props.columnId}
        isDropDisabled={disabledDroppable === props.columnId}
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
