import * as React from "react";
import classNames from "classnames";

import "@deskpro/agent-interface-style/dist/elements/dp-badges.css";

export type BadgeProps = {
  color?: DPColor;
  className?: string;
  type?: "pill" | "round" | "id" | "filterPill" | "group-filter";
  label?: string;
  value?: number | string | null;
  onClick?: (e: React.SyntheticEvent) => void;
};

const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  color,
  label = "",
  value = null,
  type = "pill",
  onClick
}) => {
  const classes = classNames("dp-Badge", className, {
    [`Badge--${type}`]: !!type,
    [`Badge--${color}`]: !!color
  });

  switch (type) {
    case "filterPill":
    case "group-filter":
      return (
        <span
          className={classes}
          role="button"
          tabIndex={-1}
          onClick={onClick}
          onKeyPress={e => e.key === "Enter" && onClick && onClick(e)}
        >
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
