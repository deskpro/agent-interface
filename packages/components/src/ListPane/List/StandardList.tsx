import * as React from "react";

import List, { ListItem, MassActionType } from "./List";
import SimpleCard, { SimpleCardProps } from "../Card/SimpleCard";
import Pagination from "../../Pagination/Pagination";
import ActionsButton from "../../Button/ActionsButton";
import Menu from "../../elements/Menu/Menu";
import ListBar from "./ListBar";
import OrderingBar from "../OrderingBar/OrderingBar";
import Icon from "../../elements/Icon/Icon";

export type StandardListProps = {
  className?: string;
  height?: number;
  items: ListItem[];
  numPages: number;
  massActions?: MassActionType[];
  onMassAction?: (actionName: React.Key) => void;
  onLoadItems: (page: number) => void;
  renderItem: (
    item: ListItem,
    props: Partial<SimpleCardProps>
  ) => React.ReactNode;
};

const StandardList: React.FC<StandardListProps> = ({
  items,
  height,
  numPages,
  onLoadItems,
  massActions,
  onMassAction,
  ...props
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
    <>
      <ListBar
        totalItemsCount={items.length}
        selectedCount={selection.length}
        onSelectAll={handleSelectAll}
        onSelectNone={handleSelectNone}
        onSelectInverse={handleSelectInverse}
      >
        <OrderingBar.Item>
          <Icon name="group_by" size={19} />
          <span className="dp-SelectGroup">
            <span className="dp-ItemRow">
              <span className="dp-Title">Grouped by</span>
              <span className="dp-Arrow" />
            </span>
            <span className="dp-ItemRow">
              <span className="dp-Subtitle">None</span>
            </span>
          </span>
        </OrderingBar.Item>
      </ListBar>
      <List
        {...props}
        items={items}
        selected={selection}
        onSelectToggle={handleSelectionToggle}
        scrollHeight={
          height
            ? height -
              (selection.length && massActions && massActions.length ? 100 : 72)
            : undefined
        }
      />
      <Pagination
        currentPage={currentPage}
        numPages={numPages}
        onPageChange={handlePageChange}
      />
      {selection.length > 0 && massActions && massActions.length > 0 && (
        <ActionsButton
          renderMenu={menuProps => (
            <Menu {...menuProps}>
              {massActions.map(({ name, label }) => (
                <Menu.MenuItem
                  key={name}
                  name={name}
                  text={label}
                  onClick={() => {
                    if (onMassAction) {
                      onMassAction(name);
                    }
                  }}
                />
              ))}
            </Menu>
          )}
        >
          Perform mass action
        </ActionsButton>
      )}
    </>
  );
};

export default StandardList;
