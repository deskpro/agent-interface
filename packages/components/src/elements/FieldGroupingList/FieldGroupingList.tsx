import * as React from "react";
import * as intersection from "lodash/intersection";

import "@deskpro/agent-interface-style/dist/components/dp-GroupedFields.css";
import ListItem from "./FieldGroupingListItem";
import getChildrenIds from "./childrenIds";
import { FieldGroupingContext } from "./FieldGroupingContext";
import { FieldGroupingListItemType } from "./FieldGroupingListItemType";

export type FieldGroupingListProps = {
  items: FieldGroupingListItemType[];
  onSelectChange: (itemId: React.Key, e: React.SyntheticEvent) => void;
};

const FieldGroupingList: React.FC<FieldGroupingListProps> = ({
  items,
  onSelectChange
}) => {
  const [selected, updatedSelected] = React.useState<React.Key[]>([]);
  const handleSelection = React.useCallback(
    (itemName: React.Key, e: React.SyntheticEvent) => {
      updatedSelected(
        selected.includes(itemName)
          ? selected.filter(i => i !== itemName)
          : selected.concat(itemName)
      );
      onSelectChange(itemName, e);
    },
    [onSelectChange, selected]
  );

  const contextValue = React.useMemo(
    () => ({ selected, onToggleItem: handleSelection }),
    [selected, handleSelection]
  );

  return (
    <FieldGroupingContext.Provider value={contextValue}>
      <div className="dp-Group-items">
        {items.map(({ children = [], ...item }) => {
          const childrenIds = getChildrenIds(children);
          const selectedChildren = intersection(childrenIds, selected);
          return (
            <ListItem
              {...item}
              isSelected={
                selected.includes(item.id) ||
                (children.length > 0 && selectedChildren.length > 0)
              }
              totalNodes={childrenIds.length}
              selectedNodes={selectedChildren.length}
            >
              {children}
            </ListItem>
          );
        })}
      </div>
    </FieldGroupingContext.Provider>
  );
};

export default FieldGroupingList;
