import * as React from "react";
import "./Button.css";

export type ButtonProps = {
  onClick(e: React.MouseEvent<HTMLElement>): void;
};

const Button: React.SFC<ButtonProps> = ({
  onClick: handleClick,
  children,
  ...props
}) => (
  <button type="button" className="btn" onClick={handleClick} {...props}>
    {children}
  </button>
);

export default Button;
