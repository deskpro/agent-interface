import * as React from "react";
import Tree, { mutateTree, moveItemOnTree } from "@atlaskit/tree";

import { GuideCardProps } from "./GuideCard";
import CardList from "../ListPane/Card/CardList";

export interface CardListItemType {
  id: React.Key;
  title: string;
  status: "draft" | "published";
  children?: React.Key[];
}

export type GuidesCardListProps = {
  rootId: string;
  items: CardListItemType[];
  onMove?: (
    cardId: React.Key,
    newParentId: React.Key,
    newPosition: number
  ) => void;
  renderCard: (
    card: CardListItemType,
    cardProps: Partial<GuideCardProps>
  ) => React.ReactNode;
};

const tranformTree = data =>
  data.reduce((acc, { children, ...item }) => {
    acc[`${item.id}`] = {
      id: `${item.id}`,
      children: children.map(id => `${id}`),
      hasChildren: Array.isArray(children) && !!children.length,
      data: item
    };
    return acc;
  }, {});

const GuidesCardList: React.FC<GuidesCardListProps> = ({
  items,
  rootId,
  onMove,
  renderCard
}) => {
  const [data, setData] = React.useState({
    rootId,
    items: tranformTree(items)
  });
  const handleDragEnd = React.useCallback(
    (source, destination) => {
      if (!destination) {
        return;
      }
      setData(moveItemOnTree(data, source, destination));
      if (onMove) {
        onMove(source.draggableId, destination.draggableId, destination.index);
      }
    },
    [data, onMove]
  );
  const handleExpand = React.useCallback(
    itemId => {
      setData(mutateTree(data, itemId, { isExpanded: true }));
    },
    [data, setData]
  );
  const handleCollapse = React.useCallback(
    itemId => {
      setData(mutateTree(data, itemId, { isExpanded: false }));
    },
    [data, setData]
  );

  return (
    <CardList className="CardList--tree">
      <Tree
        tree={data}
        onDragEnd={handleDragEnd}
        onCollapse={handleCollapse}
        onExpand={handleExpand}
        renderItem={({
          item,
          depth,
          onExpand,
          onCollapse,
          provided,
          snapshot
        }) =>
          renderCard(item.data, {
            className: `Card--depth-${depth}`,
            expandable: item.hasChildren,
            expanded: item.isExpanded,
            onExpandToggle: item.isExpanded ? onCollapse : onExpand,
            dragHandleProps: provided.dragHandleProps,
            isDragging: snapshot.isDragging,
            innerRef: provided.innerRef,
            draggableProps: provided.draggableProps
          })
        }
        isDragEnabled
      />
    </CardList>
  );
};

export default GuidesCardList;
