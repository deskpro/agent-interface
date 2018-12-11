import * as React from "react";
import classNames from "classnames";

import "@deskpro/agent-interface-style/dist/elements/tag-badge.css";

export type BadgeProps = {
  color?: "danger" | "warning" | "warningLight" | "empty" | "yellow" | "white";
};

const Badge: React.SFC<BadgeProps> = ({ children, color }) => (
  <span
    className={classNames("dp-Badge", {
      [`Badge--${color}`]: !!color
    })}
  >
    {children}
  </span>
);

export default Badge;
