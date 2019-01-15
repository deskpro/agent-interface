import * as React from "react";
import classNames from "classnames";
import Icon from "../Icon/Icon";

export type TabTitleProps = {
  className?: string;
  icon: string;
};

const TabTitle: React.FC<TabTitleProps> = ({
  icon,
  children,
  className = ""
}) => (
  <span className={classNames("Tabs-item--row", className)}>
    <Icon name={icon} size={15} />
    <span className="dp-Title">{children}</span>
  </span>
);

export default TabTitle;
