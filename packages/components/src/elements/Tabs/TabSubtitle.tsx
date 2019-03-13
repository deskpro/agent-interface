import * as React from "react";
import classNames from "classnames";
import Icon from "../Icon/Icon";

export type TabSubtitleProps = {
  className?: string;
  icon: React.ReactNode;
};

const TabSubtitle: React.FC<TabSubtitleProps> = ({
  icon,
  children,
  className = ""
}) => (
  <span className={classNames("Tabs-item--row", className)}>
    {typeof icon === "string" && <Icon name={icon} size={15} />}
    {typeof icon !== "string" && icon}
    <span className="dp-Subtitle">{children}</span>
  </span>
);

export default TabSubtitle;
