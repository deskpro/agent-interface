import * as React from "react";
import classNames from "classnames";

import "@deskpro/agent-interface-style/dist/dp-Arrow.css";

export type ArrowProps = {
  isActive?: boolean;
  onClick?: (e: React.SyntheticEvent) => void;
};

export default React.forwardRef<HTMLSpanElement, ArrowProps>(
  ({ isActive, onClick }, ref) => (
    <span
      className={classNames("dp-Icon dp-Arrow", { "is-active": isActive })}
      ref={ref}
      role="button"
      tabIndex={-1}
      onClick={onClick}
      onKeyPress={e => e.key === "Enter" && onClick && onClick(e)}
    />
  )
);
