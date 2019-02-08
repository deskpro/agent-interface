import * as React from "react";
import classNames from "classnames";

import MenuItem from "./ModuleBarMenuItem";

type ModuleBarMenuSubcomponents = {
  Item: typeof MenuItem;
};

export type ModuleBarMenuProps = {
  className?: string;
  title: string;
  isVisible: boolean;
};

const ModuleBarMenu: React.FC<ModuleBarMenuProps> &
  ModuleBarMenuSubcomponents = ({ className, title, isVisible, children }) => (
  <div
    className={classNames("dp-ModuleBarMenu", className, {
      "is-visible": isVisible
    })}
  >
    <span className="dp-ModuleBarMenu-title">{title}</span>
    <ul>{children}</ul>
  </div>
);

ModuleBarMenu.Item = MenuItem;

export default ModuleBarMenu;
