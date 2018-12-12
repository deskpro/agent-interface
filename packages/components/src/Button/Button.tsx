import * as React from "react";
import classNames from "classnames";
import "@deskpro/agent-interface-style/dist/elements/buttons.css";

export interface ButtonProps {
  size?: "default" | "small";
  variant?:
    | "outlined"
    | "contained"
    | "label"
    | "more"
    | "actions"
    | "link"
    | "round"
    | "square";
  onClick(e: React.MouseEvent<HTMLElement>): void;
}

const Button: React.SFC<ButtonProps> = ({
  onClick: handleClick,
  children,
  size = "default",
  variant = "contained",
  ...props
}) => (
  <button
    type="button"
    className={classNames("dp-Button", {
      [`Button--${size}`]: !!size && size !== "default",
      [`Button--${variant}`]: !!variant && variant !== "contained"
    })}
    onClick={handleClick}
    {...props}
  >
    {variant === "more" ? <span className="dp-dots">...</span> : children}
  </button>
);

Button.defaultProps = {
  size: "default",
  variant: "contained"
};

export default Button;
