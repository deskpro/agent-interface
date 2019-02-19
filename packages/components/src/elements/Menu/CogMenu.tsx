import * as React from "react";
import classNames from "classnames";

import Icon from "../Icon/Icon";
import { MenuProps } from "./Menu";
import Portal from "../../common/Portal/Portal";
import useOutsideClick from "../../hooks/useOutsideClick";
import useWindowSize from "../../hooks/useWindowSize";
import useMenu from "../../hooks/useMenu";

type Position = { x: number; y: number };

const COG_SIZE = 18;
const defaultMenuStyles = {
  marginLeft: 2,
  marginTop: 5
};

function useCogMenuPosition(menuRef, cogPosition, isVisible) {
  // move the cog menu to the left of the icon if it doesn't fit the window's visible area.
  const windowSize = useWindowSize();
  const [menuStyles, setMenuStyles] = React.useState(defaultMenuStyles);

  React.useEffect(
    () => {
      const styles = { ...menuStyles };
      if (menuRef.current instanceof HTMLUListElement) {
        const { width: windowWidth, height: windowHeight } = windowSize;
        const {
          offsetWidth: menuWidth,
          offsetHeight: menuHeight
        } = menuRef.current;

        if (
          windowWidth &&
          cogPosition.x + defaultMenuStyles.marginLeft + menuWidth > windowWidth
        ) {
          styles.marginLeft = -menuWidth + COG_SIZE;
        }

        if (
          windowHeight &&
          cogPosition.y + defaultMenuStyles.marginTop + menuHeight >
            windowHeight
        ) {
          styles.marginTop = -menuHeight - COG_SIZE;
        }
      }
      setMenuStyles(styles);
    },
    [menuRef.current, windowSize, isVisible]
  );

  return menuStyles;
}

export type CogProps = {
  renderMenu: (menuProps: Partial<MenuProps>) => React.ReactElement<any>;
  className?: string;
  isVisible?: boolean;
  position?: Position;
};

const Cog: React.FC<CogProps> = ({
  className,
  renderMenu,
  isVisible = false,
  position = { x: 0, y: 0 }
}) => {
  const { isVisible: menuIsVisible, hideMenu, toggleMenu } = useMenu();

  const cogRef = React.useRef(null);
  useOutsideClick(cogRef, hideMenu);

  const menuRef = React.useRef<HTMLUListElement>(null);
  const menuStyles = useCogMenuPosition(menuRef, position, menuIsVisible);

  if (!isVisible && !menuIsVisible) {
    return null;
  }

  return (
    <>
      <Portal>
        <span
          className={classNames("dp-Cog", className, {
            "is-active": menuIsVisible
          })}
          style={{
            top: position.y - COG_SIZE / 2,
            left: position.x - COG_SIZE / 2,
            display: "block",
            position: "absolute"
          }}
          role="button"
          tabIndex={-1}
          ref={cogRef}
        >
          <Icon name="settings" size={12} circle onClick={toggleMenu} />
          {menuIsVisible &&
            renderMenu({
              menuRef,
              style: menuStyles,
              onMenuClose: hideMenu
            })}
        </span>
      </Portal>
    </>
  );
};

export default React.memo(Cog);
