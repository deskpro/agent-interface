import * as React from "react";

import Kanban from "./Kanban";
import Card from "../ListPane/Card";
import { KanbanItemDraggingState } from "./KanbanItem";

export type KanbanItemID = number | string;

export interface KanbanGroup {
  id: KanbanItemID;
  title: string;
}

export interface KanbanCard {
  id: KanbanItemID;
  title: string;
}

export type StandardKanbanDataItem = {
  group: KanbanGroup;
  items: KanbanCard[];
};

export type StandardKanbanDragArgs = {
  itemId: KanbanItemID;
  fromGroupId: KanbanItemID;
  toGroupId: KanbanItemID;
  index: number;
};

export type StandardKanbanProps = {
  className?: string;
  allowReorder?: boolean;
  data: StandardKanbanDataItem[];
  onLoadMore: (group: KanbanGroup) => void;
  onDragEnd: (data: StandardKanbanDragArgs) => void;
  renderCard: (
    item: KanbanCard,
    state?: KanbanItemDraggingState
  ) => React.ReactElement<Card>;
};

const StandardKanban: React.FC<StandardKanbanProps> = ({
  className,
  allowReorder = true,
  data,
  onLoadMore,
  onDragEnd,
  renderCard
}) => (
  <Kanban
    className={className}
    draggable
    allowReorder={allowReorder}
    onDragEnd={result => {
      const { draggableId, source, destination } = result;

      // dropped outside the list
      if (!destination) {
        return;
      }

      onDragEnd({
        itemId: draggableId,
        fromGroupId: source.droppableId,
        toGroupId: destination.droppableId,
        index: destination.index
      });
    }}
  >
    {data.map(({ group, items }) => (
      <Kanban.Column
        key={group.id}
        columnId={group.id}
        header={<Card.SectionTitle>{group.title}</Card.SectionTitle>}
        scrollThreshold={0.8}
        onThresholdReach={() => onLoadMore(group)}
      >
        <Card.List hoverable>
          {items.map((card, idx) => (
            <Kanban.Item key={card.id} itemId={card.id} index={idx}>
              {state => renderCard(card, state)}
            </Kanban.Item>
          ))}
        </Card.List>
      </Kanban.Column>
    ))}
  </Kanban>
);

export default StandardKanban;
