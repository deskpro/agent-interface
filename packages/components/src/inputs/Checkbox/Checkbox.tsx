import * as React from "react";
import classNames from "classnames";

import "@deskpro/agent-interface-style/dist/elements/dp-inputs.css";

export type CheckboxProps = {
  label?: string | React.ReactNode;
  id?: string;
  undef: boolean;
};

const Checkbox: React.SFC<CheckboxProps> = ({
  label = "",
  id = "checkbox",
  undef = false,
  ...props
}) => (
  <span
    className={classNames("dp-CustomCheckbox", {
      "dp-SelectedCheckbox": undef
    })}
  >
    <input type="checkbox" className="dp-ControlInput" id={id} {...props} />
    <label htmlFor={id}>{label}</label>
  </span>
);

Checkbox.defaultProps = {
  label: ""
};

export default Checkbox;
