import * as React from "react";
import classNames from "classnames";

import MenuItem from "./MenuItem";
import MenuSearchItem from "./MenuSearch";

import "@deskpro/agent-interface-style/dist/components/dp-menus.css";

type MenuSubComponents = {
  MenuItem: typeof MenuItem;
  MenuSearch: typeof MenuSearchItem;
};

export type MenuContextType = {
  onMenuClose?: () => void;
};

export const MenuContext = React.createContext<MenuContextType>({});

export type MenuProps = {
  menuRef?: React.Ref<HTMLUListElement>;
  className?: string;
  style?: any;
  title?: string;
  isVisible?: boolean;
  linkComponent?: any;
  children: React.ReactElement<any>[];
  onMenuClose?: () => void;
};

const hasIcons = (children: React.ReactNodeArray) =>
  (React.Children.toArray(children) as React.ReactElement<any>[]).some(
    (child: React.ReactElement<any>) => !!child.props.icon
  );

const Menu: React.FC<MenuProps> & MenuSubComponents = ({
  menuRef,
  className,
  title,
  children,
  linkComponent = "a",
  isVisible = false,
  onMenuClose,
  ...otherProps
}) => (
  <MenuContext.Provider value={{ onMenuClose }}>
    <ul
      className={classNames("dp-Menu", className, {
        [`Menu--icons`]: hasIcons(children),
        "is-visible": true
      })}
      {...otherProps}
      ref={menuRef}
    >
      {!!title && <li className="dp-Menu-title">{title}</li>}
      {React.Children.map(
        children as React.ReactElement<any>[],
        (child: React.ReactElement<any>) =>
          React.cloneElement(child, {
            linkComponent
          })
      )}
    </ul>
  </MenuContext.Provider>
);

Menu.MenuItem = MenuItem;
Menu.MenuSearch = MenuSearchItem;

export default Menu;
