import * as React from "react";
import classNames from "classnames";
import Icon from "../Icon/Icon";

export type TabSubtitleProps = {
  className?: string;
  icon: string;
};

const TabSubtitle: React.SFC<TabSubtitleProps> = ({
  icon,
  children,
  className = ""
}) => (
  <span className={classNames("Tabs-item--row", className)}>
    <Icon name={icon} size={15} />
    <span className="dp-Subtitle">{children}</span>
  </span>
);

export default TabSubtitle;
