import * as React from "react";
import classNames from "classnames";

import MenuItem from "./MenuItem";
import MenuSearchItem from "./MenuSearch";
import { MenuContext, MenuContextProvider } from "./MenuContext";

import "@deskpro/agent-interface-style/dist/components/dp-menus.css";

type MenuSubComponents = {
  MenuItem: typeof MenuItem;
};

export type MenuProps = {
  menuRef?: React.Ref<HTMLUListElement>;
  className?: string;
  style?: any;
  title?: string;
  withFilter?: boolean;
  linkComponent?: any;
  children: React.ReactElement<any>[];
  parentTrail?: string;
  onMenuClose?: () => void;
};

const hasIcons = (children: React.ReactNodeArray) =>
  (React.Children.toArray(children) as React.ReactElement<any>[]).some(
    (child: React.ReactElement<any>) => !!child.props.icon
  );

const MenuComponent: React.FC<MenuProps> = ({
  menuRef,
  className,
  title,
  children,
  linkComponent = "a",
  withFilter = false,
  parentTrail = "",
  onMenuClose,
  ...otherProps
}) => {
  // try to get the menu's context.
  const menuContext = React.useContext(MenuContext);

  // Menu filtering state.
  const [filter, setFilter] = React.useState<string>("");
  const handleFilterChange = React.useCallback(
    e => {
      setFilter(e.target.value);
    },
    [filter, setFilter]
  );
  // memoize filter value to filter items.
  const filterRef = React.useRef<string>("");
  React.useLayoutEffect(
    () => {
      filterRef.current = filter;
    },
    [filterRef, filter]
  );

  const menu = (
    <ul
      className={classNames("dp-Menu", className, {
        [`Menu--icons`]: hasIcons(children),
        "is-visible": true
      })}
      {...otherProps}
      ref={menuRef}
    >
      {!!title && <li className="dp-Menu-title">{title}</li>}
      {withFilter && (
        <MenuSearchItem
          placeholder="Search..."
          value={filter}
          onChange={handleFilterChange}
        />
      )}
      {React.Children.map(
        children as React.ReactElement<any>[],
        (child: React.ReactElement<any>) => {
          if (
            !filterRef.current ||
            child.props.text
              .toLowerCase()
              .includes(filterRef.current.toLowerCase())
          ) {
            return React.cloneElement(child, {
              linkComponent,
              trail: `${parentTrail}.${child.props.name}`
            });
          }
          return null;
        }
      )}
    </ul>
  );

  return menuContext && typeof menuContext.onMenuClose === "function" ? (
    menu
  ) : (
    <MenuContextProvider onMenuClose={onMenuClose}>{menu}</MenuContextProvider>
  );
};

const Menu: React.MemoExoticComponent<React.FC<MenuProps>> &
  MenuSubComponents = React.memo<React.FC<MenuProps>>(
  MenuComponent
) as React.MemoExoticComponent<React.FC<MenuProps>> & MenuSubComponents;

Menu.MenuItem = MenuItem;

export default Menu;
