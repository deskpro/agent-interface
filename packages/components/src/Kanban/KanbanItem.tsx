import * as React from "react";
import classNames from "classnames";

export type KanbanItemProps = {
  className?: string;
};

const KanbanItem: React.FC<KanbanItemProps> = ({ className, children }) => (
  <div className={classNames("dp-Kanban-item", className)}>{children}</div>
);

export default KanbanItem;
