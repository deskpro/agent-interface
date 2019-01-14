import * as React from "react";
import classNames from "classnames";

import Icon from "../Icon/Icon";

export type MenuSearchProps = {
  icon?: string;
};

const MenuSearchItem: React.FC<
  MenuSearchProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ icon = "find", className = "", ...props }) => (
  <li className="dp-Menu-search">
    <Icon name={icon} size={13} />
    <input
      type="search"
      className={classNames("dp-Input Input--search", className)}
      {...props}
    />
  </li>
);

export default MenuSearchItem;
