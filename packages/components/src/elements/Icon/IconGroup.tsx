import * as React from "react";
import classNames from "classnames";

import "@deskpro/agent-interface-style/dist/components/dp-ListPane.css";

export type IconGroupProps = {
  className?: string;
};

const IconGroup: React.SFC<IconGroupProps> = ({ children, className }) => (
  <span className={classNames("dp-IconGroup", className)}>{children}</span>
);

export default IconGroup;
