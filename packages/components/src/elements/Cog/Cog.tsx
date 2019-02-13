import * as React from "react";
import classNames from "classnames";

import Icon from "../Icon/Icon";
import Menu, { MenuProps } from "../Menu/Menu";
import { MenuContext } from "../Menu/MenuContext";
import Portal from "../../common/Portal/Portal";

type Position = { x: number; y: number };

export type CogProps = {
  menuId: string;
  renderMenu: (menuProps: Partial<MenuProps>) => React.ReactElement<Menu>;
  className?: string;
  isVisible?: boolean;
  position?: Position;
};

const Cog: React.FC<CogProps> = ({
  className,
  menuId,
  renderMenu,
  isVisible = false,
  position
}) => {
  const { visibleMenu, show, hide } = React.useContext(MenuContext);

  if (!isVisible && visibleMenu !== menuId) {
    return null;
  }

  const { x = 0, y = 0 } = position || {};

  return (
    <>
      <Portal>
        <span
          className={classNames("dp-Cog", className, {
            "is-active": visibleMenu === menuId
          })}
          style={{
            top: y - 9,
            left: x - 9,
            display: "block",
            position: "absolute"
          }}
          role="button"
          tabIndex={-1}
          onClick={e => {
            if (visibleMenu === menuId) {
              hide();
            } else {
              show(e, { menuId, menuType: "cog" });
            }
          }}
          onKeyPress={() => {}}
        >
          <Icon name="settings" size={12} circle />
        </span>
      </Portal>
      {visibleMenu === menuId && renderMenu({ menuId })}
    </>
  );
};

export default Cog;
