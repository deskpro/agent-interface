import * as React from "react";
import classNames from "classnames";

import MenuItem from "./MenuItem";
import MenuSearchItem from "./MenuSearch";
import { MenuContext } from "./MenuContext";
import Portal from "../../common/Portal/Portal";

import useOutsideClick from "../../hooks/useOutsideClick";
import useWindowSize from "../../hooks/useWindowSize";

import "@deskpro/agent-interface-style/dist/components/dp-menus.css";

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
  const { visibleMenu, position, hide, updatePosition } = React.useContext(
    MenuContext
  );

  const windowSize = useWindowSize();
  const menuRef = React.useRef<HTMLUListElement>(null);

  useOutsideClick(menuRef, hide);

  React.useEffect(
    () => {
      if (menuRef.current instanceof HTMLUListElement) {
        const { width: windowWidth, height: windowHeight } = windowSize;
        let { x, y } = position;
        const {
          offsetWidth: menuWidth,
          offsetHeight: menuHeight
        } = menuRef.current;

        if (windowWidth && x + menuWidth > windowWidth) {
          x -= x + menuWidth - windowWidth;
        }

        if (windowHeight && y + menuHeight > windowHeight) {
          y -= y + menuHeight - windowHeight;
        }

        updatePosition({ x, y });
      }
    },
    [menuRef.current, windowSize]
  );

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
