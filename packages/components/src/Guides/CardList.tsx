import * as React from "react";
import classNames from "classnames";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import { GuideCardProps } from "./GuideCard";
import CardList from "../ListPane/Card/CardList";

export interface CardListItemType {
  id: React.Key;
  title: string;
  status: "draft" | "published";
  children?: CardListItemType[];
}

type GuidesListBaseProps = {
  level?: number;
  renderCard: (
    card: CardListItemType,
    cardProps: Partial<GuideCardProps>
  ) => React.ReactNode;
};

export type GuidesCardListItemProps = GuidesListBaseProps & {
  item: CardListItemType;
  index: number;
};
export type GuidesCardListProps = GuidesListBaseProps & {
  parent?: React.Key;
  items: CardListItemType[];
  onMove?: (
    cardId: React.Key,
    newParentId: React.Key,
    newPosition: number
  ) => void;
};

const CardListItem: React.FC<GuidesCardListItemProps> = ({
  item: { children = [], ...item },
  index,
  level = 0,
  renderCard
}) => {
  const [isExpanded, setExpandedState] = React.useState(false);
  return (
    <>
      <Draggable draggableId={item.id} index={index}>
        {(provided, snapshot) =>
          renderCard(item, {
            expandable: children.length > 0,
            expanded: isExpanded,
            onExpandToggle: () => setExpandedState(!isExpanded),
            dragHandleProps: provided.dragHandleProps,
            isDragging: snapshot.isDragging,
            innerRef: provided.innerRef,
            ...provided.draggableProps
          })
        }
      </Draggable>
      {children.length > 0 && isExpanded && (
        <GuidesCardList
          items={children}
          level={level + 1}
          renderCard={renderCard}
        />
      )}
    </>
  );
};

const GuidesCardList: React.FC<GuidesCardListProps> = ({
  items,
  level = 0,
  parent = null,
  onMove,
  ...props
}) => {
  const cardList = (
    <Droppable droppableId={parent || "root"}>
      {droppableProvided => (
        <CardList
          className={classNames({
            "CardList--tree": level === 0,
            "CardList--subLevel": level > 0
          })}
          ref={droppableProvided.innerRef}
        >
          {items.map((item, index) => (
            <CardListItem key={item.id} item={item} {...props} index={index} />
          ))}
          {droppableProvided.placeholder}
        </CardList>
      )}
    </Droppable>
  );
  if (level === 0) {
    return (
      <DragDropContext
        onDragEnd={({ draggableId, destination }) =>
          onMove &&
          onMove(draggableId, destination.droppableId, destination.index)
        }
      >
        {cardList}
      </DragDropContext>
    );
  }
  return cardList;
};

export default GuidesCardList;
