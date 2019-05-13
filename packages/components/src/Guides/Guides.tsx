import * as React from "react";
import classNames from "classnames";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import GuideItem, { GuideType, GuideItemProps } from "./GuideItem";
import GuidesBreadcrumbs from "./GuidesBreadcrumbs";
import CardList from "./CardList";
import GuideCard from "./GuideCard";

import "@deskpro/agent-interface-style/dist/components/dp-Guides.css";

type GuidesSubComponents = {
  Breadcrumbs: typeof GuidesBreadcrumbs;
  TopicsList: typeof CardList;
  Card: typeof GuideCard;
};

export type GuidesProps = {
  kind: "guides" | "sections";
  reorderable?: boolean;
  items: GuideType[];
  onSettingsClick: (guideId: React.Key) => void;
  onReorder?: (itemId: React.Key, newPosition: number) => void;
};

const Guides: React.FC<GuidesProps> & GuidesSubComponents = ({
  kind = "guides",
  reorderable = false,
  items,
  onSettingsClick,
  onReorder
}) => {
  const renderItem = React.useMemo(
    () => ({ id, ...props }: GuideType & Partial<GuideItemProps>) => (
      <GuideItem
        key={id}
        id={id}
        {...props}
        className={classNames({ "Guide--section": kind === "sections" })}
        onSettingsClick={onSettingsClick}
      />
    ),
    [kind, onSettingsClick]
  );

  const handleDragEnd = React.useCallback(
    ({ draggableId, destination }) => {
      if (reorderable) {
        if (!onReorder) {
          throw new Error("onReorder is mandatory for reorderable lists.");
        }
        onReorder(draggableId, destination.index);
      }
    },
    [onReorder, reorderable]
  );

  if (reorderable) {
    return (
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="guides">
          {provided => (
            <div
              className="dp-Guides-list is-hoverable"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {items.map((item, index) => (
                <Draggable key={item.id} index={index} draggableId={item.id}>
                  {(draggableProvided, snapshot) =>
                    renderItem({
                      ...item,
                      ...draggableProvided,
                      isDragging: snapshot.isDragging
                    })
                  }
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }

  return (
    <div className="dp-Guides-list is-hoverable">{items.map(renderItem)}</div>
  );
};

Guides.Breadcrumbs = GuidesBreadcrumbs;
Guides.TopicsList = CardList;
Guides.Card = GuideCard;

export default Guides;
