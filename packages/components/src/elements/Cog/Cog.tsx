import * as React from "react";
import classNames from "classnames";

import Icon from "../Icon/Icon";
import { MenuProps } from "../Menu/Menu";

export type CogProps = {
  menu: React.ReactElement<MenuProps>;
  className?: string;
};

const Cog: React.FunctionComponent<CogProps> = ({ className, menu }) => {
  const [opened, setMenuState] = React.useState(false);
  return (
    <span
      className={classNames("dp-Cog", className, { "is-active": opened })}
      onMouseLeave={() => setMenuState(false)}
    >
      <Icon
        name="settings"
        size={12}
        circle
        onClick={() => setMenuState(!opened)}
      />
      {React.cloneElement(menu, { isVisible: opened })}
    </span>
  );
};

export default Cog;
