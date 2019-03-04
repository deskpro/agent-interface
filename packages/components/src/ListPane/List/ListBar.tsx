import * as React from "react";
import classNames from "classnames";

import Checkbox from "../../inputs/Checkbox/Checkbox";
import Dropdown from "../../Button/Dropdown";
import OrderingBar from "../OrderingBar/OrderingBar";
import Menu from "../../elements/Menu/Menu";

export type ListBarProps = {
  selectedCount: number;
  totalItemsCount: number;
  onSelectAll: () => void;
  onSelectNone: () => void;
  onSelectInverse: () => void;
};

const ListBar: React.FC<ListBarProps> = ({
  selectedCount,
  totalItemsCount,
  onSelectAll,
  onSelectNone,
  onSelectInverse,
  children
}) => {
  const checkbox = (
    <Checkbox
      onChange={selectedCount ? onSelectNone : onSelectAll}
      checked={selectedCount > 0}
      undef={selectedCount > 0 && selectedCount < totalItemsCount}
    />
  );

  return (
    <OrderingBar>
      <OrderingBar.Item
        className={classNames({ "is-expanded": selectedCount > 0 })}
      >
        {selectedCount > 0 ? (
          <>
            <Dropdown
              renderMenu={menuProps => (
                <Menu {...menuProps}>
                  <Menu.MenuItem
                    name="select-all"
                    text="Select All"
                    onClick={onSelectAll}
                  />
                  <Menu.MenuItem
                    name="select-none"
                    text="Select none"
                    onClick={onSelectNone}
                  />
                  <Menu.MenuItem
                    name="inverse"
                    text="Inverse"
                    onClick={onSelectInverse}
                  />
                </Menu>
              )}
            >
              {checkbox}
            </Dropdown>
            <span className="dp-MassSelect-itemsCount">
              {!!selectedCount && `(${selectedCount} items selected)`}
            </span>
          </>
        ) : (
          checkbox
        )}
      </OrderingBar.Item>
      {children}
    </OrderingBar>
  );
};

export default ListBar;
