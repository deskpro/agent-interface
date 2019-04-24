import * as React from "react";
import classNames from "classnames";

export default React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={classNames("dp-Filters-panel", className)}
      {...props}
    />
  )
);
