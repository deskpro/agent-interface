import * as React from "react";
import classNames from "classnames";

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
};

const Kanban: React.FC<KanbanProps> & KanbanSubComponents = ({
  className,
  style,
  children
}) => (
  <ScrollArea
    className={classNames("dp-Kanban", className)}
    contentClassName="dp-Kanban-columns"
    style={style}
  >
    {children}
  </ScrollArea>
);

Kanban.Column = Column;
Kanban.Item = Item;

export default Kanban;
