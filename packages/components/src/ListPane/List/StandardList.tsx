import * as React from "react";

import List, { MassActionType } from "./List";
import { SimpleCardProps } from "../Card/SimpleCard";
import Pagination from "../../Pagination/Pagination";
import ActionsButton from "../../Button/ActionsButton";
import Menu from "../../elements/Menu/Menu";
import ListBar from "./ListBar";
import OrderingBar from "../OrderingBar/OrderingBar";
import Icon from "../../elements/Icon/Icon";
import { ListItem } from "../types";
import useItemSelection from "../useItemSelection";
import Arrow from "../../Button/Arrow";

export type StandardListProps = {
  className?: string;
  height?: number;
  items: ListItem[];
  numPages: number;
  massActions?: MassActionType[];
  onMassAction?: (actionName: React.Key, selectedItems: ListItem[]) => void;
  onLoadItems: (page: number) => void;
  showAddButton?: boolean;
  onAddClick?: (e: React.SyntheticEvent) => void;
  showPaginator?: boolean;
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
  showAddButton = false,
  onAddClick,
  showPaginator = true,
  ...props
}) => {
  const {
    selection,
    toggleItemSelection,
    toggleGroupSelection,
    getGroupCheckState,
    handleSelectAll,
    handleSelectNone,
    handleSelectInverse
  } = useItemSelection(items);

  // reset selection on new items.
  React.useEffect(handleSelectNone, [items]);

  const [currentPage, setCurrentPage] = React.useState(1);
  const handlePageChange = React.useCallback(
    nextPage => {
      setCurrentPage(nextPage);
      onLoadItems(nextPage);
    },
    [setCurrentPage, onLoadItems]
  );

  return (
    <>
      {showAddButton && onAddClick && (
        <List.AddButton onClick={onAddClick}>
          Click to add new item
        </List.AddButton>
      )}
      <ListBar
        totalItemsCount={items.length}
        selectedCount={selection.length}
        onSelectAll={handleSelectAll}
        onSelectNone={handleSelectNone}
        onSelectInverse={handleSelectInverse}
      >
        <OrderingBar.Item>
          <Icon name="grouped-by" size={19} />
          <span className="dp-SelectGroup">
            <span className="dp-ItemRow">
              <span className="dp-Title">Grouped by</span>
              <Arrow />
            </span>
            <span className="dp-ItemRow">
              <span className="dp-Subtitle">None</span>
            </span>
          </span>
        </OrderingBar.Item>
        <OrderingBar.Item>
          <Icon name="sort" size={19} />
          <span className="dp-SelectGroup">
            <span className="dp-ItemRow">
              <span className="dp-Title">Sort by</span>
              <Arrow />
            </span>
            <span className="dp-ItemRow">
              <span className="dp-Subtitle">Date</span>
            </span>
          </span>
        </OrderingBar.Item>
        <OrderingBar.Item>
          <Icon name="faceted-by" size={19} />
          <span className="dp-SelectGroup">
            <span className="dp-ItemRow">
              <span className="dp-Title">Faceted by</span>
              <Arrow />
            </span>
            <span className="dp-ItemRow">
              <span className="dp-Subtitle">3 Agents</span>
            </span>
          </span>
        </OrderingBar.Item>
        <OrderingBar.Item>
          <Icon name="fields" size={19} />
          <span className="dp-SelectGroup">
            <span className="dp-ItemRow">
              <span className="dp-Title">Fields</span>
              <Arrow />
            </span>
            <span className="dp-ItemRow">
              <span className="dp-Subtitle">8 fields</span>
            </span>
          </span>
        </OrderingBar.Item>
      </ListBar>
      <List
        {...props}
        key={currentPage}
        items={items}
        selected={selection}
        onSelectToggle={toggleItemSelection}
        onGroupSelectionToggle={toggleGroupSelection}
        getGroupCheckState={getGroupCheckState}
        scrollHeight={
          height
            ? height -
              (selection.length && massActions && massActions.length
                ? 95
                : 73) -
              (showAddButton ? 38 : 0)
            : undefined
        }
      />
      {showPaginator && (
        <Pagination
          currentPage={currentPage}
          numPages={numPages}
          onPageChange={handlePageChange}
          showGotoPage
        />
      )}
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
                      onMassAction(
                        name,
                        items.filter(i => selection.includes(i.id))
                      );
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
