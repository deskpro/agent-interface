import * as React from "react";
import classNames from "classnames";
import Icon from "../Icon/Icon";

export type TabItemProps = {
  className?: string;
  icon?: string;
  iconColor?: DPColor;
  iconOnly?: boolean;
  isActive?: boolean;
  isExpanded?: boolean;
  onTabClick?(e: React.SyntheticEvent<HTMLElement>): void;
  onMenuToggle?(e: React.SyntheticEvent<HTMLElement>): void;
  renderMenu?(): React.ReactNode;
};

const TabItem: React.FC<TabItemProps> = ({
  icon,
  iconOnly = false,
  iconColor,
  children,
  className = "",
  isActive = false,
  isExpanded = false,
  onTabClick,
  onMenuToggle,
  renderMenu
}) => (
  <li
    className={classNames("dp-Tabs-item", className, {
      "Tabs-item--button": iconOnly,
      "is-active": isActive,
      "is-visible": isExpanded
    })}
    role="menuitem"
    onClick={onTabClick}
    onKeyPress={e => e.key === "Enter" && onTabClick && onTabClick(e)}
  >
    {!!icon && <Icon name={icon} size={iconOnly ? 24 : 13} color={iconColor} />}
    {children}
    {!!renderMenu && (
      <button className="dp-Arrow" type="button" onClick={onMenuToggle} />
    )}
    {!!renderMenu && isExpanded && renderMenu()}
  </li>
);

export default TabItem;
