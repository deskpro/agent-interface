import * as React from "react";
import classNames from "classnames";

import "@deskpro/agent-interface-style/dist/elements/dp-inputs.css";

export type CheckboxProps = {
  label?: string | React.ReactNode;
  id?: string;
  undef?: boolean;
  className?: string;
  labelClassName?: string;
};

const Checkbox: React.SFC<
  CheckboxProps & React.HTMLProps<HTMLInputElement>
> = ({
  label = "",
  id = "checkbox",
  undef = false,
  className = "",
  labelClassName = "",
  ...props
}) => (
  <span
    className={classNames("dp-CustomCheckbox", {
      "dp-SelectedCheckbox": undef
    })}
  >
    <input
      type="checkbox"
      className={classNames("dp-ControlInput", className)}
      id={id}
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
