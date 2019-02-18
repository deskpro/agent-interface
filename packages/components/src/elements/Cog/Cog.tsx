import * as React from "react";
import classNames from "classnames";

import Icon from "../Icon/Icon";
import { MenuProps } from "../Menu/Menu";
import { MenuContext } from "../Menu/MenuContext";
import Portal from "../../common/Portal/Portal";
import useOutsideClick from "../../hooks/useOutsideClick";
import useWindowSize from "../../hooks/useWindowSize";

type Position = { x: number; y: number };

const COG_SIZE = 18;

export type CogProps = {
  menuId: string;
  renderMenu: (menuProps: Partial<MenuProps>) => React.ReactElement<any>;
  className?: string;
  isVisible?: boolean;
  position?: Position;
};

const Cog: React.FC<CogProps> = ({
  className,
  menuId,
  renderMenu,
  isVisible = false,
  position = { x: 0, y: 0 }
}) => {
  const {
    visibleMenu,
    show,
    hide,
    position: menuPosition = { x: 0, y: 0 },
    updatePosition
  } = React.useContext(MenuContext);

  const cogRef = React.useRef(null);
  useOutsideClick(cogRef, hide);

  const cogClickHandler = React.useCallback(
    e => {
      if (visibleMenu === menuId) {
        hide();
      } else {
        show(e, { menuId, menuType: "cog" });
      }
    },
    [visibleMenu]
  );

  const menuRef = React.useRef<HTMLUListElement>(null);

  const windowSize = useWindowSize();

  // move the cog menu to the left of the icon if it doesn't fit the window's visible area.
  React.useEffect(
    () => {
      if (menuRef.current instanceof HTMLUListElement) {
        const { width: windowWidth, height: windowHeight } = windowSize;
        let { x, y } = menuPosition;
        const {
          offsetWidth: menuWidth,
          offsetHeight: menuHeight
        } = menuRef.current;

        if (
          windowWidth &&
          position.x + menuPosition.x + menuWidth > windowWidth
        ) {
          x -= menuWidth - COG_SIZE;
        }

        if (
          windowHeight &&
          position.y + menuPosition.y + menuHeight > windowHeight
        ) {
          y -= menuHeight;
        }

        updatePosition({ x, y });
      }
    },
    [menuRef.current, windowSize, visibleMenu !== menuId]
  );

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
            top: y - COG_SIZE / 2,
            left: x - COG_SIZE / 2,
            display: "block",
            position: "absolute"
          }}
          role="button"
          tabIndex={-1}
          ref={cogRef}
        >
          <Icon name="settings" size={12} circle onClick={cogClickHandler} />
          {visibleMenu === menuId &&
            renderMenu({
              menuId,
              menuRef,
              style: { marginTop: menuPosition.y, marginLeft: menuPosition.x }
            })}
        </span>
      </Portal>
    </>
  );
};

export default React.memo(Cog);
