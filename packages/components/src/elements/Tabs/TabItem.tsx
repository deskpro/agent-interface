import * as React from "react";
import classNames from "classnames";
import Icon from "../Icon/Icon";

export type TabItemProps = {
  className?: string;
  icon?: string;
  label: string;
  isActive?: boolean;
  isExpanded?: boolean;
  onTabClick?(e: React.SyntheticEvent<HTMLElement>): void;
  onMenuToggle?(e: React.SyntheticEvent<HTMLElement>): void;
  renderMenu?(): React.ReactNode;
};

const TabItem: React.SFC<TabItemProps> = ({
  icon,
  label,
  className = "",
  isActive = false,
  isExpanded = false,
  onTabClick,
  onMenuToggle,
  renderMenu
}) => (
  <li
    className={classNames("dp-Tabs-item", className, {
      "is-active": isActive,
      "is-visible": isExpanded,
      "is-expandable": !!renderMenu
    })}
    role="menuitem"
    onClick={onTabClick}
    onKeyPress={e => e.key === "Enter" && onTabClick && onTabClick(e)}
  >
    {!!icon && <Icon name={icon} size={13} />}
    {label}
    {!!renderMenu && (
      <button className="dp-Arrow" type="button" onClick={onMenuToggle} />
    )}
    {!!renderMenu && isExpanded && renderMenu()}
  </li>
);

export default TabItem;
