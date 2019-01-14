import * as React from "react";
import classNames from "classnames";

import "@deskpro/agent-interface-style/dist/components/dp-ListPane.css";

export type TagBar = {
  className?: string;
};

const TagBar: React.FC<TagBar> = ({ className, children }) => (
  <span className={classNames("dp-TagBar", className)}>{children}</span>
);

export default TagBar;
