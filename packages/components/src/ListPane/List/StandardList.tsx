import * as React from "react";

import List, { ListItem, MassActionType } from "./List";
import SimpleCard, { SimpleCardProps } from "../Card/SimpleCard";

export type StandardListProps = {
  items: ListItem[];
  numPages: number;
  massActions?: MassActionType[];
  onMassAction?: (actionName: React.Key) => void;
  onLoadItems: (page: number) => void;
  as: React.ComponentType<SimpleCardProps>;
};

const StandardList: React.FC<StandardListProps> = ({
  items,
  numPages,
  onLoadItems,
  massActions,
  onMassAction,
  as = SimpleCard
}) => {
  const [selection, updateSelection] = React.useState<React.Key[]>([]);

  const handleSelectionToggle = React.useCallback(
    (cardId: React.Key) =>
      updateSelection(
        selection.includes(cardId)
          ? selection.filter(id => id !== cardId)
          : selection.concat(cardId)
      ),
    [selection]
  );
  const handleSelectAll = React.useCallback(
    () => updateSelection(items.map(({ id }) => id)),
    []
  );
  const handleSelectNone = React.useCallback(() => updateSelection([]), []);
  const handleSelectInverse = React.useCallback(
    () =>
      updateSelection(
        items.map(({ id }) => id).filter(id => !selection.includes(id))
      ),
    [selection]
  );

  // reset selection on new items.
  React.useEffect(() => updateSelection([]), [items]);

  const [currentPage, setCurrentPage] = React.useState(1);
  const handlePageChange = React.useCallback(nextPage => {
    setCurrentPage(currentPage);
    onLoadItems(nextPage);
  }, []);

  return (
    <List
      items={items}
      selected={selection}
      onSelectToggle={handleSelectionToggle}
      onSelectAll={handleSelectAll}
      onSelectNone={handleSelectNone}
      onSelectInverse={handleSelectInverse}
      currentPage={currentPage}
      numPages={numPages}
      onPageChange={handlePageChange}
      massActions={massActions}
      onMassAction={onMassAction}
      as={as}
    />
  );
};

export default StandardList;
