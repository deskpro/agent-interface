import * as React from "react";
import classNames from "classnames";

import MenuItem from "./MenuItem";
import MenuSearchItem from "./MenuSearch";

import "@deskpro/agent-interface-style/dist/components/dp-menus.css";

type MenuSubComponents = {
  MenuItem: typeof MenuItem;
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
  withFilter?: boolean;
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
  withFilter = false,
  onMenuClose,
  ...otherProps
}) => {
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

  return (
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
                linkComponent
              });
            }
            return null;
          }
        )}
      </ul>
    </MenuContext.Provider>
  );
};

Menu.MenuItem = MenuItem;

export default Menu;
