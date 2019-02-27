import * as React from "react";
import classNames from "classnames";

import MenuItem, { MenuItemProps } from "./MenuItem";
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
  checkedItems?: React.Key[];
  isCheckable?: boolean;
  checkType?: "single" | "multi";
  onItemCheck?: (
    itemName: React.Key,
    checked: boolean,
    e: React.SyntheticEvent<HTMLElement>
  ) => void;
  linkComponent?: any;
  children: React.ReactElement<any>[];
  parentTrail?: string;
  onMenuClose?: () => void;
};

const MenuComponent: React.FC<MenuProps> = ({
  menuRef,
  className,
  title,
  children,
  checkedItems = [],
  isCheckable = false,
  checkType = "single",
  onItemCheck,
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

  // checkable items functionality
  const [checked, setChecked] = React.useState<React.Key[]>([]);
  const toggleChecked = React.useCallback(
    (name: React.Key, e: React.SyntheticEvent<HTMLElement>) => {
      const isChecked = checked.includes(name);
      let nextChecked;

      if (checkType === "single") {
        nextChecked = isChecked ? [] : [name];
      } else {
        nextChecked = isChecked
          ? checked.filter(item => item !== name)
          : checked.concat(name);
      }
      setChecked(nextChecked);

      if (onItemCheck) {
        onItemCheck(name, !isChecked, e);
      }
    },
    [checkType, onItemCheck, checked, setChecked]
  );
  React.useEffect(
    () => {
      setChecked(checkedItems);
    },
    [checkedItems]
  );

  const hasIcons = React.useMemo(
    () =>
      (React.Children.toArray(children) as React.ReactElement<any>[]).some(
        (child: React.ReactElement<any>) => !!child.props.icon
      ),
    [children]
  );

  const renderChild = React.useCallback(
    (child: React.ReactElement<any>) => {
      if (
        !filterRef.current ||
        child.props.text.toLowerCase().includes(filterRef.current.toLowerCase())
      ) {
        const props: Partial<MenuItemProps> = {
          linkComponent,
          trail: `${parentTrail}.${child.props.name}`
        };
        if (isCheckable) {
          props.isChecked = checked.includes(child.props.name);
          props.onClick = toggleChecked;
        } else {
          const { onClick: providedClickHandler } = props;
          props.onClick = (name, e) => {
            if (typeof providedClickHandler === "function") {
              providedClickHandler(name, e);
            }
            if (
              (typeof providedClickHandler === "function" || props.link) &&
              typeof menuContext.onMenuClose === "function"
            ) {
              menuContext.onMenuClose();
            }
          };
        }
        return React.cloneElement(child, props);
      }
      return null;
    },
    [filterRef, isCheckable, checked, linkComponent, parentTrail]
  );

  const menu = (
    <ul
      className={classNames("dp-Menu", className, {
        "Menu--icons": hasIcons,
        "Menu--tick-left": isCheckable && !hasIcons,
        "Menu--tick-right": isCheckable && hasIcons,
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
      {React.Children.map(children as React.ReactElement<any>[], renderChild)}
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
