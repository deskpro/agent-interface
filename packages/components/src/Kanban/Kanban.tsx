import * as React from "react";
import classNames from "classnames";
import { DragDropContext } from "react-beautiful-dnd";

import Column from "./KanbanColumn";
import Item from "./KanbanItem";
import ScrollArea from "../ScrollArea/ScrollArea";

type KanbanSubComponents = {
  Column: typeof Column;
  Item: typeof Item;
};

export type KanbanProps = {
  className?: string;
  style?: object;
  draggable?: boolean;
  allowReorder?: boolean;
  onDragEnd?: (result: any) => void;
};

export type KanbanContextType = {
  draggable: boolean;
  disabledDroppable: string | null;
};

export const KanbanContext = React.createContext<KanbanContextType>({
  draggable: false,
  disabledDroppable: null
});

const Kanban: React.FC<KanbanProps> & KanbanSubComponents = ({
  className,
  style,
  draggable = false,
  allowReorder = true,
  onDragEnd,
  children
}) => {
  const scrollArea = (
    <ScrollArea
      className={classNames("dp-Kanban", className)}
      contentClassName="dp-Kanban-columns"
      style={style}
    >
      {children}
    </ScrollArea>
  );

  const [disabledDroppable, setDisabledTarget] = React.useState<string | null>(
    null
  );

  const handleDragStart = React.useCallback(
    ({ source }) => {
      if (!allowReorder) {
        setDisabledTarget(source.droppableId);
      }
    },
    [allowReorder]
  );

  const handleDragEnd = React.useCallback(
    result => {
      if (!allowReorder) {
        setDisabledTarget(null);
      }
      if (typeof onDragEnd === "function") {
        onDragEnd(result);
      }
    },
    [allowReorder, onDragEnd]
  );

  return (
    <KanbanContext.Provider value={{ draggable, disabledDroppable }}>
      {draggable ? (
        <DragDropContext
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          {scrollArea}
        </DragDropContext>
      ) : (
        scrollArea
      )}
    </KanbanContext.Provider>
  );
};

Kanban.Column = Column;
Kanban.Item = Item;

export default Kanban;
