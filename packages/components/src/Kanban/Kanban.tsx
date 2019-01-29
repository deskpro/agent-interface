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
  onDragEnd?: (result: any) => void;
};

export type KanbanContextType = {
  draggable: boolean;
};

export const KanbanContext = React.createContext<KanbanContextType>({
  draggable: false
});

const Kanban: React.FC<KanbanProps> & KanbanSubComponents = ({
  className,
  style,
  draggable = false,
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

  return (
    <KanbanContext.Provider value={{ draggable }}>
      {draggable ? (
        <DragDropContext onDragEnd={onDragEnd}>{scrollArea}</DragDropContext>
      ) : (
        scrollArea
      )}
    </KanbanContext.Provider>
  );
};

Kanban.Column = Column;
Kanban.Item = Item;

export default Kanban;
