import * as React from "react";
import classNames from "classnames";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import OptionListItem from "./OptionListItem";

type OptionListSubcomponents = {
  Item: typeof OptionListItem;
};

export type OptionListProps = {
  className?: string;
  style?: any;
  name: React.Key;
  sortable?: boolean;
  onOrderChange?: (
    itemName: React.Key,
    oldPosition: number,
    newPosition: number
  ) => void;
  checkable?: boolean;
  children: React.ReactElement<any>[];
};

const OptionList: React.FC<OptionListProps> & OptionListSubcomponents = ({
  className,
  name,
  style,
  children,
  checkable,
  sortable,
  onOrderChange
}) => {
  const onDragEnd = React.useCallback(
    ({ draggableId, source, destination }) => {
      if (onOrderChange) {
        onOrderChange(draggableId, source.index, destination.index);
      }
    },
    [onOrderChange]
  );

  return (
    <div
      className={classNames("dp-OptionList dp-Menu", className)}
      style={style}
    >
      {!sortable &&
        React.Children.map(children, (child: React.ReactElement<any>) =>
          React.cloneElement(child, { checkable })
        )}
      {sortable && (
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId={name} type={name}>
            {(provided, snapshot) => (
              <span ref={provided.innerRef}>
                {React.Children.map(
                  children,
                  (child: React.ReactElement<any>, index) => (
                    <Draggable
                      draggableId={child.props.name}
                      index={index}
                      isDragDisabled={child.props.disabled}
                    >
                      {draggableProvided =>
                        React.cloneElement(child, {
                          checkable,
                          showDragHandle: true,
                          isDragging: snapshot.isDragging,
                          ...draggableProvided
                        })
                      }
                    </Draggable>
                  )
                )}
              </span>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </div>
  );
};

OptionList.Item = OptionListItem;

export default OptionList;
