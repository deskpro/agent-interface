import * as React from "react";

import Kanban from "./Kanban";
import Card from "../ListPane/Card";
import { KanbanItemProvidedProps } from "./KanbanItem";
import { Checkbox } from "..";

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

export interface StandardKanbanItemProvidedProps
  extends KanbanItemProvidedProps {
  isChecked?: boolean;
  isCheckable?: boolean;
  onCheckChange?: (e: React.SyntheticEvent) => void;
}

export type StandardKanbanDragArgs = {
  itemId: KanbanItemID;
  fromGroupId: KanbanItemID;
  toGroupId: KanbanItemID;
  index: number;
};

export type StandardKanbanProps = {
  className?: string;
  allowReorder?: boolean;
  checkable?: boolean;
  data: StandardKanbanDataItem[];
  onLoadMore: (group: KanbanGroup) => void;
  onDragEnd: (data: StandardKanbanDragArgs) => void;
  renderCard: (
    item: KanbanCard,
    props?: StandardKanbanItemProvidedProps
  ) => React.ReactElement<Card>;
};

const StandardKanban: React.FC<StandardKanbanProps> = ({
  className,
  allowReorder = true,
  checkable = false,
  data,
  onLoadMore,
  onDragEnd,
  renderCard
}) => {
  const [checked, updateChecked] = React.useState<KanbanItemID[]>([]);

  return (
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
      {data.map(({ group, items }) => {
        const allChecked = items.every(i => checked.includes(i.id));
        const someChecked = items.some(i => checked.includes(i.id));
        const columnItems = items.map(i => i.id);

        return (
          <Kanban.Column
            key={group.id}
            columnId={group.id}
            header={
              <Card.SectionTitle>
                {checkable && (
                  <Checkbox
                    id={group.title}
                    checked={someChecked && items.length > 0}
                    undef={someChecked && !allChecked && items.length > 0}
                    onChange={() => {
                      updateChecked(
                        allChecked
                          ? checked.filter(c => !columnItems.includes(c))
                          : [
                              ...new Set<KanbanItemID>(
                                checked.concat(columnItems)
                              )
                            ]
                      );
                    }}
                  />
                )}
                {group.title}
              </Card.SectionTitle>
            }
            scrollThreshold={0.8}
            onThresholdReach={() => onLoadMore(group)}
          >
            <Card.List hoverable>
              {items.map((card, idx) => (
                <Kanban.Item key={card.id} itemId={card.id} index={idx}>
                  {state =>
                    renderCard(card, {
                      ...state,
                      isCheckable: checkable,
                      isChecked: checked.includes(card.id),
                      onCheckChange: () => {
                        updateChecked(
                          checked.includes(card.id)
                            ? checked.filter(c => c !== card.id)
                            : checked.concat(card.id)
                        );
                      }
                    })
                  }
                </Kanban.Item>
              ))}
            </Card.List>
          </Kanban.Column>
        );
      })}
    </Kanban>
  );
};

export default StandardKanban;
