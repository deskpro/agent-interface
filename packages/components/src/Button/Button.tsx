import * as React from "react";

export type ButtonProps = {
  onClick(e: React.MouseEvent<HTMLElement>): void;
};

const Button: React.SFC<ButtonProps> = ({
  onClick: handleClick,
  children,
  ...props
}) => (
  <button
    type="button"
    style={{
      border: "1px solid #ddd",
      borderRadius: "3px",
      backgroundColor: "transparent",
      outline: "none",
      padding: "10px"
    }}
    onClick={handleClick}
    {...props}
  >
    {children}
  </button>
);

export default Button;
