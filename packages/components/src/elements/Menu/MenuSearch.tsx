import * as React from "react";
import classNames from "classnames";

import Icon from "../Icon/Icon";

export type MenuSearchProps = {
  icon?: string;
};

const MenuSearchItem: React.FC<
  MenuSearchProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({
  icon = "find",
  className = "",
  name = "filter",
  value = "",
  ...props
}) => (
  <li className="dp-Menu-search">
    <Icon name={icon} size={13} />
    <input
      type="search"
      name="filter"
      className={classNames("dp-Input Input--search", className)}
      value={value}
      {...props}
    />
  </li>
);

export default MenuSearchItem;
