import * as React from "react";
import classNames from "classnames";

import "@deskpro/agent-interface-style/dist/elements/dp-Icons.css";
import icons from "./icons";

export type IconProps = React.ComponentProps<"span"> & {
  name: string;
  size?: number;
  circle?: boolean;
  color?: DPColor;
  iconRef?: React.Ref<HTMLSpanElement>;
  onClick?(
    e: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
  ): void;
};

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color,
  circle,
  iconRef,
  onClick,
  ...props
}) => {
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
      role="button"
      tabIndex={-1}
      onClick={onClick}
      onKeyDown={onClick}
      ref={iconRef}
      {...props}
    >
      <SvgIcon width={size} height={size} />
    </span>
  );
};

Icon.defaultProps = {
  color: undefined,
  size: 24
};

export default React.memo(
  React.forwardRef<HTMLSpanElement, IconProps>((props, ref) => (
    <Icon {...props} iconRef={ref as React.Ref<HTMLSpanElement>} />
  ))
);
