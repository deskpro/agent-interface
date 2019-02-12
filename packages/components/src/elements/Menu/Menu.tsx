import * as React from "react";
import classNames from "classnames";

import "@deskpro/agent-interface-style/dist/components/dp-menus.css";
import MenuItem from "./MenuItem";
import MenuSearchItem from "./MenuSearch";
import { MenuContext } from "./MenuContext";
import useOutsideClick from "../../hooks/useOutsideClick";
import Portal from "../../common/Portal/Portal";

type MenuSubComponents = {
  MenuItem: typeof MenuItem;
  MenuSearch: typeof MenuSearchItem;
};

export type MenuProps = {
  menuId: string;
  className?: string;
  title?: string;
  isVisible?: boolean;
  linkComponent?: any;
  children: React.ReactElement<any>[];
};

const hasIcons = (children: React.ReactNodeArray) =>
  (React.Children.toArray(children) as React.ReactElement<any>[]).some(
    (child: React.ReactElement<any>) => !!child.props.icon
  );

const Menu: React.FC<MenuProps> & MenuSubComponents = ({
  menuId,
  className,
  title,
  children,
  linkComponent = "a",
  isVisible = false,
  ...otherProps
}) => {
  const { visibleMenu, position, hide } = React.useContext(MenuContext);
  const menuRef = React.useRef(null);

  useOutsideClick(menuRef, () => hide(menuId));

  return (
    <Portal>
      {visibleMenu === menuId && (
        <ul
          className={classNames("dp-Menu", className, {
            [`Menu--icons`]: hasIcons(children),
            "is-visible": true
          })}
          style={{ top: position.y, left: position.x }}
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
      )}
    </Portal>
  );
};

Menu.MenuItem = MenuItem;
Menu.MenuSearch = MenuSearchItem;

export default Menu;
