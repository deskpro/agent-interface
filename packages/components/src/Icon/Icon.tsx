import * as React from "react";
import "@deskpro/agent-interface-style/dist/elements/dp-Icons.css";
import icons from "./icons";

export type IconProps = {
  name: string;
  size?: number;
  color?: "default" | "primary" | "dark";
};

const colors = {
  default: "#979797",
  primary: "#3a8dde",
  dark: "#8B9293"
};

const Icon: React.SFC<IconProps> = ({ name, size = 24, color = "default" }) => {
  const SvgIcon = icons[name];
  if (!SvgIcon) {
    return null;
  }
  return (
    <span className={`dp-Icon dp-Icon--${name}`}>
      <SvgIcon
        fill={colors[color] || colors.default}
        width={size}
        height={size}
      />
    </span>
  );
};

Icon.defaultProps = {
  color: "default",
  size: 24
};

export default Icon;
