import * as React from "react";
import classNames from "classnames";

import "@deskpro/agent-interface-style/dist/elements/dp-menus.css";
import Icon from "../Icon/Icon";

export type MenuItem = {
  name: string;
  icon?: string;
  text: string;
  link?: string;
  onClick?(e: React.SyntheticEvent<HTMLElement>): void;
  subItems: MenuItem[];
  className?: string;
};

export type MenuProps = {
  className?: string;
  withIcons?: boolean;
  title?: string;
  enableSearch?: boolean;
  isVisible?: boolean;
  items?: Array<MenuItem>;
  linkComponent?: any;
};

const Menu: React.SFC<MenuProps> = props => {
  const {
    className,
    withIcons,
    title,
    enableSearch = false,
    items = [],
    linkComponent = "a",
    isVisible = false,
    ...otherProps
  } = props;
  return (
    <ul
      className={classNames("dp-Menu", className, {
        [`Menu--icons`]: withIcons,
        "is-visible": isVisible
      })}
      {...otherProps}
    >
      {!!title && <li className="dp-Menu-title">{title}</li>}
      {enableSearch && <li className="dp-Menu-search">Search goes here</li>}
      {items.map(
        ({
          name,
          text,
          icon,
          link,
          onClick,
          className: itemClassName,
          subItems = [],
          ...itemProps
        }) => (
          <li
            key={name}
            className={classNames("dp-Menu-linkItem", itemClassName)}
            {...itemProps}
          >
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
            {!!subItems.length && <span className="dp-Arrow" />}
            {!!subItems.length && <Menu items={subItems} />}
          </li>
        )
      )}
    </ul>
  );
};

export default Menu;
