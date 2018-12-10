import * as React from "react";
import classNames from "classnames";
import "@deskpro/agent-interface-style/dist/elements/buttons.css";

const colors = ["primary", "secondary", "success", "info", "warning", "danger"];
const sizes = ["small", "medium", "large"];

export interface ButtonProps {
  size?: string;
  color?: string;
  rounded?: boolean | null;
  onClick(e: React.MouseEvent<HTMLElement>): void;
}

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

Button.defaultProps = {
  size: "",
  color: "",
  rounded: false
};

export default Button;
