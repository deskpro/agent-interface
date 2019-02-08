import * as React from "react";
import classNames from "classnames";

import Icon from "../../elements/Icon/Icon";

import "@deskpro/agent-interface-style/dist/components/dp-icons.css";

export type ActivityStatusProps = {
  status: "writing" | "viewing";
  className?: string;
};

const ActivityStatus: React.FC<ActivityStatusProps> = ({
  status,
  children,
  className
}) => (
  <span
    className={classNames(
      "dp-ActivityStatus",
      `ActivityStatus--${status}`,
      className,
      { "ActivityStatus--primary": status === "writing" }
    )}
  >
    <Icon
      name={status === "writing" ? "edit" : "view"}
      color={status === "writing" ? "primary" : undefined}
      size={15}
    />
    {children}
  </span>
);

export default ActivityStatus;
