import * as React from "react";
import classNames from "classnames";

import "@deskpro/agent-interface-style/dist/elements/dp-forms.css";

export interface RadioProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

const Radio: React.SFC<RadioProps> = ({ className, id, label, ...props }) => (
  <div className="dp-RadioItem">
    <input
      type="radio"
      id={id}
      className={classNames("dp-Input Input--radio", className)}
      {...props}
    />
    <label htmlFor={id}>{label}</label>
  </div>
);

export default Radio;
