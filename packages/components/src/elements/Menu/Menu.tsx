import * as React from "react";
import classNames from "classnames";

import "@deskpro/agent-interface-style/dist/components/dp-menus.css";
import MenuItem from "./MenuItem";
import MenuSearchItem from "./MenuSearch";

type MenuSubComponents = {
  MenuItem: typeof MenuItem;
  MenuSearch: typeof MenuSearchItem;
};

export type MenuProps = {
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
  className,
  title,
  children,
  linkComponent = "a",
  isVisible = false,
  ...otherProps
}) => (
  <ul
    className={classNames("dp-Menu", className, {
      [`Menu--icons`]: hasIcons(children),
      "is-visible": isVisible
    })}
    {...otherProps}
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
);

Menu.MenuItem = MenuItem;
Menu.MenuSearch = MenuSearchItem;

export default Menu;
