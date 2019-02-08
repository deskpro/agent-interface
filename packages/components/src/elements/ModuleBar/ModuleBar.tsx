import * as React from "react";
import classNames from "classnames";
import ModuleBarItem from "./ModuleBarItem";
import ModuleBarSeparator from "./ModuleBarSeparator";

import "@deskpro/agent-interface-style/dist/components/dp-ModuleBar.css";

type ModuleBarSubcomponents = {
  Item: typeof ModuleBarItem;
  Separator: typeof ModuleBarSeparator;
};

export type ModuleBarProps = {
  className?: string;
};

const ModuleBar: React.FC<ModuleBarProps> & ModuleBarSubcomponents = ({
  className,
  children
}) => (
  <div className={classNames("dp-ModulebarContainer", className)}>
    <ul className="dp-ModuleBar">{children}</ul>
  </div>
);

ModuleBar.Item = ModuleBarItem;
ModuleBar.Separator = ModuleBarSeparator;

export default ModuleBar;
