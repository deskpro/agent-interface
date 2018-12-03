import * as React from "react";

export type ButtonProps = {};

const Button = (props: ButtonProps) => (
  <button
    type="button"
    style={{
      border: "1px solid #ddd",
      borderRadius: "3px",
      backgroundColor: "transparent",
      outline: "none",
      padding: "10px"
    }}
    {...props}
  />
);

export default Button;
