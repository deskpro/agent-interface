import * as React from "react";
import classNames from "classnames";

import Icon from "../Icon/Icon";

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
}) => (
  <li className={classNames("dp-Menu-linkItem", className)} {...itemProps}>
    {!!icon && <Icon name={icon} size={13} />}
    {!!link &&
      React.createElement(
        linkComponent,
        {
          className: "dp-Menu-link",
          [linkComponent === "a" ? "href" : "to"]: link,
          onClick
        },
        text
      )}
    {text}
    {!!children && <span className="dp-Arrow" />}
    {children}
  </li>
);

export default MenuItem;
