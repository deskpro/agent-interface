import * as React from "react";
// import * as PropTypes from "prop-types";
import classNames from "classnames";
import "@deskpro/agent-interface-style/dist/elements/buttons.css";

const colors = ["primary", "secondary", "success", "info", "warning", "danger"];
const sizes = ["small", "medium", "large"];

export type ButtonProps = {
  size?: string;
  color?: string;
  rounded?: boolean;
  onClick(e: React.MouseEvent<HTMLElement>): void;
};

const Button: React.SFC<ButtonProps> = ({
  onClick: handleClick,
  children,
  size = "",
  color = "",
  rounded = false,
  ...props
}) => (
  <button
    type="button"
    className={classNames("dp-Button", {
      [`Button--${color}`]: colors.includes(color),
      [`Button--${size}`]: sizes.includes(size),
      "Button--rounded": rounded
    })}
    onClick={handleClick}
    {...props}
  >
    {children}
  </button>
);

// @ts-ignore
// Button.propTypes = {
//   size: PropTypes.oneOf(sizes),
//   color: PropTypes.oneOf(colors),
//   onClick: PropTypes.func.isRequired,
//   rounded: PropTypes.bool
// };

export default Button;
