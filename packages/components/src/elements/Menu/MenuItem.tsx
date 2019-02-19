import * as React from "react";
import classNames from "classnames";

import Icon from "../Icon/Icon";
import { MenuContext } from "./Menu";

export type MenuItemProps = {
  icon?: string;
  text: string;
  link?: string;
  onClick?(e: React.SyntheticEvent<HTMLElement>): void;
  className?: string;
  linkComponent?: any;
};

const MenuItem: React.FC<MenuItemProps> = ({
  text,
  icon,
  link,
  onClick,
  className,
  children,
  linkComponent = "a",
  ...itemProps
}) => {
  const { onMenuClose } = React.useContext(MenuContext);
  const clickHandler = React.useCallback(
    e => {
      if (link || onClick) {
        if (typeof onClick === "function") {
          onClick(e);
        }
        if (typeof onMenuClose === "function") {
          onMenuClose();
        }
      }
    },
    [link, onClick]
  );

  const labelProps = {
    className: "dp-Menu-link"
  };
  if (link) {
    labelProps[linkComponent === "a" ? "href" : "to"] = link;
  }

  return (
    <li
      className={classNames("dp-Menu-linkItem", className)}
      {...itemProps}
      role="menuitem"
      onClick={clickHandler}
      onKeyPress={clickHandler}
    >
      {!!icon && <Icon name={icon} size={13} />}
      {React.createElement(link ? linkComponent : "span", labelProps, text)}
      {!!children && <span className="dp-Arrow" />}
      {children}
    </li>
  );
};

export default MenuItem;
