import * as React from "react";
import classNames from "classnames";

import "@deskpro/agent-interface-style/dist/elements/dp-badges.css";

export type TagProps = {
  color?: DPColor;
  size?: "small" | "medium";
};

const Tag: React.SFC<TagProps> = ({ children, color, size }) => (
  <span
    className={classNames("dp-Tag", {
      [`Tag--${color}`]: !!color,
      [`Tag--${size}`]: !!size
    })}
  >
    {children}
  </span>
);

export default Tag;
