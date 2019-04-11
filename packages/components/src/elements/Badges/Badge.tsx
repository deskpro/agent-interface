import * as React from "react";
import classNames from "classnames";

import "@deskpro/agent-interface-style/dist/elements/dp-badges.css";

export type BadgeProps = {
  color?: DPColor;
  className?: string;
  type?: "pill" | "round" | "id" | "filterPill" | "group-filter";
  label?: string;
  value?: React.ReactNode;
  onClick?: (e: React.SyntheticEvent) => void;
  children?: React.ReactNode;
  innerRef?: React.Ref<HTMLSpanElement>;
};

const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  color,
  label = "",
  value = null,
  type = "pill",
  onClick,
  innerRef
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
          ref={innerRef}
        >
          {label}
          <span className="dp-Num">{value || 0}</span>
          {children}
        </span>
      );

    case "id":
      return (
        <span
          className={classes}
          onClick={onClick}
          ref={innerRef}
          tabIndex={-1}
          role="button"
          onKeyPress={e => {
            if (e.key === "Enter" && onClick) {
              onClick(e);
            }
          }}
        >
          {label}
          {value}
        </span>
      );

    default:
      return (
        <span className={classes} ref={innerRef}>
          {label}
          {value}
          {children}
        </span>
      );
  }
};

export default React.forwardRef<HTMLSpanElement, BadgeProps>((props, ref) => (
  <Badge {...props} innerRef={ref} />
));
