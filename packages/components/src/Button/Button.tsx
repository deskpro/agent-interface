import * as React from "react";
import classNames from "classnames";
import "@deskpro/agent-interface-style/dist/elements/dp-buttons.css";

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
  color?: DPColor;
  className?: string;
  buttonRef?: React.Ref<HTMLButtonElement>;
  onClick(e: React.MouseEvent<HTMLElement>): void;
}

const Button: React.FC<ButtonProps> = ({
  onClick: handleClick,
  children,
  size = "default",
  variant = "contained",
  color = "primary",
  className,
  buttonRef,
  ...props
}) => (
  <button
    type="button"
    className={classNames(
      "dp-Button",
      {
        [`Button--${size}`]: !!size && size !== "default",
        [`Button--${variant}`]: !!variant && variant !== "contained",
        [`Button--${color}`]: !!color
      },
      className
    )}
    ref={buttonRef}
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

export default React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => <Button {...props} buttonRef={ref} />
);
