import * as React from "react";

import Menu, { MenuProps } from "./Menu";
import { MenuContext } from "./MenuContext";
import Portal from "../../common/Portal/Portal";

import useOutsideClick from "../../hooks/useOutsideClick";
import useWindowSize from "../../hooks/useWindowSize";

const ContextMenu: React.FC<MenuProps> = ({ menuId, ...props }) => {
  const { visibleMenu, position, hide, updatePosition } = React.useContext(
    MenuContext
  );

  const menuRef = React.useRef<HTMLUListElement>(null);

  useOutsideClick(menuRef, hide);
  const windowSize = useWindowSize();

  React.useEffect(
    () => {
      if (menuRef.current instanceof HTMLUListElement) {
        const { width: windowWidth, height: windowHeight } = windowSize;
        let { x, y } = position;
        const {
          offsetWidth: menuWidth,
          offsetHeight: menuHeight
        } = menuRef.current;

        if (windowWidth && x + menuWidth > windowWidth) {
          x -= x + menuWidth - windowWidth;
        }

        if (windowHeight && y + menuHeight > windowHeight) {
          y -= y + menuHeight - windowHeight;
        }

        updatePosition({ x, y });
      }
    },
    [menuRef.current, windowSize, visibleMenu === menuId]
  );

  return (
    <Portal>
      {visibleMenu === menuId && (
        <Menu
          menuId={menuId}
          {...props}
          style={{ top: position.y, left: position.x }}
          menuRef={menuRef}
        />
      )}
    </Portal>
  );
};

export default ContextMenu;
