import * as React from "react";
import classNames from "classnames";

import "@deskpro/agent-interface-style/dist/elements/dp-inputs.css";

export type CheckboxProps = {
  label?: string | React.ReactNode;
  id?: string;
  undef?: boolean;
  className?: string;
  wrapperClassName?: string;
  labelClassName?: string;
  checked?: boolean | null;
};

const Checkbox: React.FC<React.HTMLProps<HTMLInputElement> & CheckboxProps> = ({
  label = "",
  id = "checkbox",
  undef = false,
  wrapperClassName,
  className = "",
  labelClassName = "",
  checked,
  ...props
}) => (
  <span
    className={classNames("dp-CustomCheckbox", wrapperClassName, {
      "dp-SelectedCheckbox": undef || checked === null
    })}
  >
    <input
      type="checkbox"
      className={classNames("dp-ControlInput", className)}
      id={id}
      checked={checked}
      {...props}
    />
    <label htmlFor={id} className={labelClassName}>
      {label}
    </label>
  </span>
);

Checkbox.defaultProps = {
  label: ""
};

export default Checkbox;
