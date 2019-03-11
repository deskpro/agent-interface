import * as React from "react";

import Kanban from "./Kanban";
import Card from "../ListPane/Card";
import { KanbanItemProvidedProps } from "./KanbanItem";
import Checkbox from "../inputs/Checkbox/Checkbox";
import { ListItem, ListItemGroup } from "../ListPane/types";
import useItemSelection from "../ListPane/useItemSelection";

export type StandardKanbanDataItem = {
  group: ListItemGroup;
  items: ListItem[];
};

export interface StandardKanbanItemProvidedProps
  extends KanbanItemProvidedProps {
  isChecked?: boolean;
  isCheckable?: boolean;
  onCheckChange?: (e: React.SyntheticEvent) => void;
}

export type StandardKanbanDragArgs = {
  itemId: React.Key;
  fromGroupId: React.Key;
  toGroupId: React.Key;
  index: number;
};

export type StandardKanbanProps = {
  className?: string;
  allowReorder?: boolean;
  checkable?: boolean;
  items: ListItem[];
  onLoadMore: (group: ListItemGroup) => void;
  onDragEnd: (data: StandardKanbanDragArgs) => void;
  renderCard: (
    item: ListItem,
    props?: StandardKanbanItemProvidedProps
  ) => React.ReactElement<Card>;
};

const StandardKanban: React.FC<StandardKanbanProps> = ({
  className,
  allowReorder = true,
  checkable = false,
  items,
  onLoadMore,
  onDragEnd,
  renderCard
}) => {
  const {
    selection,
    toggleGroupSelection,
    toggleItemSelection,
    getGroupCheckState
  } = useItemSelection(items);

  const data = React.useMemo(
    () =>
      items.reduce(
        (acc, { group = { id: "DEFAULT", title: "" }, ...item }) => {
          const lastItem = acc[acc.length - 1] || null;
          if (lastItem && lastItem.group.id === group.id) {
            acc[acc.length - 1].items.push(item);
          } else {
            acc.push({
              group,
              items: [item]
            });
          }
          return acc;
        },
        [] as StandardKanbanDataItem[]
      ),
    [items]
  );

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
      {data.map(({ group, items: groupItems }) => {
        const groupCheckState = getGroupCheckState(group.id);
        return (
          <Kanban.Column
            key={group.id}
            columnId={group.id}
            header={
              <Card.SectionTitle>
                {checkable && group.id !== "DEFAULT" && (
                  <Checkbox
                    id={group.title}
                    checked={!!groupCheckState}
                    undef={groupCheckState === "undef"}
                    onChange={() => {
                      toggleGroupSelection(group.id);
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
              {groupItems.map((card, idx) => (
                <Kanban.Item key={card.id} itemId={card.id} index={idx}>
                  {state =>
                    renderCard(card, {
                      ...state,
                      isCheckable: checkable,
                      isChecked: selection.includes(card.id),
                      onCheckChange: () => {
                        toggleItemSelection(card.id);
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
