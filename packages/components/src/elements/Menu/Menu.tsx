import * as React from "react";
import classNames from "classnames";

import "@deskpro/agent-interface-style/dist/elements/dp-menus.css";
import MenuItem from "./MenuItem";
import MenuSearchItem from "./MenuSearch";

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

class Menu extends React.PureComponent<MenuProps> {
  static MenuItem = MenuItem;

  static MenuSearch = MenuSearchItem;

  render() {
    const {
      className,
      title,
      children,
      linkComponent = "a",
      isVisible = false,
      ...otherProps
    } = this.props;

    return (
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
  }
}

export default Menu;
