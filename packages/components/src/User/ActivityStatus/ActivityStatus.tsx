import * as React from "react";
import classNames from "classnames";

import Icon from "../../elements/Icon/Icon";

import "@deskpro/agent-interface-style/dist/components/dp-icons.css";

export type ActivityStatusProps = {
  status: "writing" | "viewing";
  color: DPColor;
  className?: string;
};

const ActivityStatus: React.SFC<ActivityStatusProps> = ({
  status,
  color,
  children,
  className
}) => (
  <span
    className={classNames(
      "dp-ActivityStatus",
      `ActivityStatus--${status}`,
      className,
      { [`ActivityStatus--${color}`]: !!color }
    )}
  >
    <Icon
      name={status === "writing" ? "edit" : "view"}
      color={color}
      size={15}
    />
    {children}
  </span>
);

export default ActivityStatus;
