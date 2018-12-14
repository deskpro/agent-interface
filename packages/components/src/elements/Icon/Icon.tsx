import * as React from "react";
import classNames from "classnames";

import "@deskpro/agent-interface-style/dist/elements/dp-Icons.css";
import icons from "./icons";

export type IconProps = {
  name: string;
  size?: number;
  circle?: boolean;
  color?: DPColor;
};

const Icon: React.SFC<IconProps> = ({ name, size = 24, color, circle }) => {
  const SvgIcon = icons[name];
  if (!SvgIcon) {
    return null;
  }
  return (
    <span
      className={classNames(`dp-Icon Icon--${name}`, {
        "Icon--circle": circle,
        [`Icon--${color}`]: !!color
      })}
    >
      <SvgIcon width={size} height={size} />
    </span>
  );
};

Icon.defaultProps = {
  color: undefined,
  size: 24
};

export default Icon;
