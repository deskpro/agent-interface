import * as React from "react";
import { ListItem } from "./types";

export default function useItemSelection(items: ListItem[]) {
  const [selection, updateSelection] = React.useState<React.Key[]>([]);

  const toggleItemSelection = React.useCallback(
    (itemId: React.Key) => {
      updateSelection(
        selection.includes(itemId)
          ? selection.filter(c => c !== itemId)
          : selection.concat(itemId)
      );
    },
    [selection, updateSelection]
  );

  const toggleGroupSelection = React.useCallback(
    (groupId?: React.Key) => {
      const groupItems = items
        .filter(
          i =>
            (!i.group && (!groupId || groupId === "DEFAULT")) ||
            (!!i.group && i.group.id === groupId)
        )
        .map(i => i.id);
      // const allChecked = groupItems.every(id => checked.includes(id));
      const someChecked = groupItems.some(id => selection.includes(id));

      updateSelection(
        someChecked
          ? selection.filter(c => !groupItems.includes(c))
          : [...new Set<React.Key>(selection.concat(groupItems))]
      );
    },
    [selection, updateSelection, items]
  );

  const getGroupCheckState = (groupId: React.Key) => {
    const groupItems = items
      .filter(
        i =>
          (!i.group && (!groupId || groupId === "DEFAULT")) ||
          (!!i.group && i.group.id === groupId)
      )
      .map(i => i.id);
    const allChecked = groupItems.every(id => selection.includes(id));
    const someChecked = groupItems.some(id => selection.includes(id));

    return someChecked && !allChecked ? "undef" : allChecked;
  };

  const handleSelectAll = React.useCallback(
    () => updateSelection(items.map(({ id }) => id)),
    [items, updateSelection]
  );
  const handleSelectNone = React.useCallback(() => updateSelection([]), [
    updateSelection
  ]);
  const handleSelectInverse = React.useCallback(
    () =>
      updateSelection(
        items.map(({ id }) => id).filter(id => !selection.includes(id))
      ),
    [items, selection, updateSelection]
  );

  return {
    selection,
    toggleGroupSelection,
    toggleItemSelection,
    getGroupCheckState,
    handleSelectAll,
    handleSelectNone,
    handleSelectInverse
  };
}
