import * as React from "react";
import "@deskpro/agent-interface-style/dist/elements/dp-Icons.css";
import icons from "./icons";

export type IconProps = {
  name: string;
  width?: number;
  height?: number;
  fill?: string;
  color?: "default" | "primary" | "dark";
};

const colors = {
  default: "#979797",
  primary: "#3a8dde",
  dark: "#8B9293"
};

const Icon: React.SFC<IconProps> = ({
  name,
  width = 24,
  height = 24,
  fill = "none",
  color = "default"
}) => {
  const icon = icons[name] || [];
  const [viewBoxWidth, viewBoxHeight, paths] = icon;
  const colorCode = colors[color] || colors.default;

  return (
    <span className="dp-Icon">
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        fill={fill}
        xmlns="http://www.w3.org/2000/svg"
      >
        {paths.map(path => (
          <path key={path} d={path} fill={colorCode} />
        ))}
      </svg>
    </span>
  );
};

Icon.defaultProps = {
  color: "default",
  fill: "none",
  height: 24,
  width: 24
};

export default Icon;
