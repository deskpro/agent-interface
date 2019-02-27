import * as React from "react";
import Menu from "./Menu";
import ContextMenu from "./ContextMenu";

export type StandardMenuItem = {
  text: string;
  name: React.Key;
  icon: string;
  subItems?: (StandardMenuItem | "-")[];
};

export type StandardContextMenuProps = {
  onItemClick: (name: React.Key, e: React.SyntheticEvent<HTMLElement>) => void;
  items: StandardMenuItem[];
};

const StandardContextMenu: React.FC<StandardContextMenuProps> = ({
  onItemClick,
  items,
  children
}) => {
  const renderMenu = React.useCallback(
    menuProps => {
      const renderItems = (menuItems: (StandardMenuItem | "-")[]) =>
        menuItems.map(item => {
          if (item === "-") {
            return <Menu.Divider />;
          }
          const { name, subItems, ...itemProps } = item as StandardMenuItem;
          return (
            <Menu.MenuItem
              key={name}
              name={name}
              {...itemProps}
              onClick={onItemClick}
            >
              {!!subItems && subItems.length > 0 && (
                <Menu>{renderItems(subItems)}</Menu>
              )}
            </Menu.MenuItem>
          );
        });

      return <Menu {...menuProps}>{renderItems(items)}</Menu>;
    },
    [items]
  );

  return <ContextMenu renderMenu={renderMenu}>{children}</ContextMenu>;
};

export default StandardContextMenu;
