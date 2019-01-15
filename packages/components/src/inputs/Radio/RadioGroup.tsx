import * as React from "react";
import classNames from "classnames";

import "@deskpro/agent-interface-style/dist/elements/dp-forms.css";

const RadioGroup: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
  className,
  ...props
}) => (
  <div className={classNames("dp-RadioWrapper", className)} {...props}>
    {children}
  </div>
);

export default RadioGroup;
