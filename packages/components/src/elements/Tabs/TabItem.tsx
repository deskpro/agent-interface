import * as React from "react";
import classNames from "classnames";
import Icon from "../Icon/Icon";
import Arrow from "../../Button/Arrow";

export type TabItemProps = {
  className?: string;
  icon?: React.ReactNode;
  iconColor?: DPColor;
  iconOnly?: boolean;
  isActive?: boolean;
  isExpanded?: boolean;
  onTabClick?: (e: React.SyntheticEvent) => void;
  onMenuToggle?: (e: React.SyntheticEvent) => void;
  renderMenu?(): React.ReactNode;
  tabRef?: React.Ref<HTMLLIElement>;
  children?: React.ReactNode;
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
  renderMenu,
  tabRef
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
    ref={tabRef}
  >
    {!!icon && typeof icon === "string" && (
      <Icon name={icon} size={iconOnly ? 24 : 13} color={iconColor} />
    )}
    {!!icon && typeof icon !== "string" && icon}
    {children}
    {!!renderMenu && <Arrow onClick={onMenuToggle} />}
    {!!renderMenu && isExpanded && renderMenu()}
  </li>
);

export default React.forwardRef<HTMLLIElement, TabItemProps>((props, ref) => (
  <TabItem {...props} tabRef={ref} />
));
