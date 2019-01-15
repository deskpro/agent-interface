import * as React from "react";
import classNames from "classnames";

import "@deskpro/agent-interface-style/dist/elements/dp-badges.css";

export type BadgeProps = {
  color?: DPColor;
  type?: "pill" | "round" | "id" | "filterPill";
  label?: string;
  value?: number | string | null;
};

const Badge: React.FC<BadgeProps> = ({
  children,
  color,
  label = "",
  value = null,
  type = "pill"
}) => {
  const classes = classNames("dp-Badge", {
    [`Badge--${type}`]: !!type,
    [`Badge--${color}`]: !!color
  });

  switch (type) {
    case "filterPill":
      return (
        <span className={classes}>
          {label}
          <span className="dp-Num">{value || 0}</span>
          {children}
        </span>
      );

    case "id":
      return (
        <span className="dp-BadgeWrapper">
          <span className={classes}>
            {label}
            {value}
          </span>
          {children}
        </span>
      );

    default:
      return (
        <span className={classes}>
          {label}
          {value}
          {children}
        </span>
      );
  }
};

export default Badge;
