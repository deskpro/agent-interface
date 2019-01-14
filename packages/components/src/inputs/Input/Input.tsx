import * as React from "react";
import classNames from "classnames";

import "@deskpro/agent-interface-style/dist/elements/dp-forms.css";
import Icon from "../../elements/Icon/Icon";

export interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: string;
  icon?: string;
}

const Input: React.FC<InputProps> = ({
  error,
  icon,
  type = "text",
  className,
  ...props
}) => (
  <div className="dp-Form-item">
    {!!icon && <Icon name={icon} size={13} />}
    <input
      type={type}
      className={classNames("dp-Input", className, `Input--${type}`, {
        "is-error": !!error
      })}
      {...props}
    />
    {!!error && <span className="dp-Input-error">{error}</span>}
  </div>
);

export default Input;
