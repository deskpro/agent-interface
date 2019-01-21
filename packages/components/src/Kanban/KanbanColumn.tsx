import * as React from "react";
import classNames from "classnames";
import ScrollArea from "../ScrollArea/ScrollArea";

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
}) => (
  <div className={classNames("dp-Kanban-column", className)} style={style}>
    <div className="dp-Kanban-columnTitle">{title}</div>
    <ScrollArea
      style={{ height: "calc(100% - 35px)", width: "100%" }}
      threshold={scrollThreshold}
      onTresholdReach={onThresholdReach}
    >
      {children}
    </ScrollArea>
  </div>
);

export default KanbanColumn;
