import * as React from "react";
import classNames from "classnames";

import Dropdown from "../../Button/Dropdown";
import Menu from "../Menu/Menu";
import { MenuItemProps } from "../Menu/MenuItem";
import Icon from "../Icon/Icon";

import "@deskpro/agent-interface-style/dist/components/dp-actions.css";

export interface ActionBarItemType {
  name: React.Key;
  title: string;
  icon: string;
  items: MenuItemProps[];
}

export type ActionsBarProps = {
  className?: string;
  type?: "default" | "outlined";
  items: ActionBarItemType[];
  onItemClick: (itemName: React.Key, e: React.SyntheticEvent) => void;
};

const ActionsBar: React.FC<ActionsBarProps> = ({
  className,
  type = "default",
  items,
  onItemClick
}) => (
  <div
    className={classNames("dp-ActionsBar", className, {
      outlined: type === "outlined"
    })}
  >
    {items.map(({ items: subItems, name, icon, title }) => (
      <Dropdown
        key={name}
        renderMenu={menuProps => (
          <Menu {...menuProps}>
            {subItems.map(({ name: menuItemName, ...menuItemProps }) => (
              <Menu.MenuItem
                key={menuItemName}
                name={menuItemName}
                {...menuItemProps}
                onClick={onItemClick}
              />
            ))}
          </Menu>
        )}
      >
        <Icon name={icon} size={type === "outlined" ? 15 : 23} />
        {title}
      </Dropdown>
    ))}
  </div>
);

export default ActionsBar;
