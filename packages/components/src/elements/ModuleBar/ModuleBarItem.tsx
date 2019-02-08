import * as React from "react";
import classNames from "classnames";

import Icon from "../Icon/Icon";

export type ModuleBarItemProps = {
  icon: string;
  label?: string;
  isActive?: boolean;
  onClick?: (e: React.MouseEvent<HTMLLinkElement>) => void;
  className?: string;
};

const ModuleBarItem: React.FC<ModuleBarItemProps> = ({
  icon,
  className,
  label,
  isActive = false,
  onClick,
  children
}) => (
  <li
    className={classNames("dp-ModuleBarList dp-ModuleBar-item", className, {
      "is-active": isActive
    })}
  >
    <Icon name={icon} size={21} onClick={onClick} />
    {!!label && <span className="dp-IconTooltip">{label}</span>}
    {children}
  </li>
);

export default ModuleBarItem;
