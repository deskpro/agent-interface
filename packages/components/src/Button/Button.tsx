import * as React from "react";
import classNames from "classnames";
import "@deskpro/agent-interface-style/dist/elements/buttons.css";

// const colors = ["primary", "secondary", "success", "info", "warning", "danger"];
const sizes = ["small", "medium", "large"];

export interface ButtonProps {
  size: "large" | "small";
  isActions?: boolean;
  onClick(e: React.MouseEvent<HTMLElement>): void;
}

const Button: React.SFC<ButtonProps> = ({
  onClick: handleClick,
  children,
  size = "large",
  isActions = false,
  ...props
}) => (
  <button
    type="button"
    className={classNames("dp-Button", {
      [`Button--${size}`]: sizes.includes(size),
      "dp-ActionButton": isActions
    })}
    onClick={handleClick}
    {...props}
  >
    {children}
  </button>
);

Button.defaultProps = {
  size: "large",
  isActions: false
};

export default Button;
