import * as React from "react";
import classNames from "classnames";

import "@deskpro/agent-interface-style/dist/elements/dp-ListPane.css";

export type FacetBarProps = {
  className?: string;
};

const FacetBar: React.FC<FacetBarProps> = ({ className, children }) => (
  <ul className={classNames("dp-FacetBar", className)}>
    {React.Children.map(children, child => (
      <li className="dp-FacetBar-item">{child}</li>
    ))}
  </ul>
);

export default FacetBar;
