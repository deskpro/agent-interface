import * as React from "react";

import Menu, { MenuProps } from "./Menu";
import Portal from "../../common/Portal/Portal";

import useOutsideClick from "../../hooks/useOutsideClick";
import useWindowSize from "../../hooks/useWindowSize";
import useMenu from "../../hooks/useMenu";

export type ContextMenuProps = {
  triggerEvent?: "onClick" | "onContextMenu" | "onDoubleClick";
  renderMenu: (menuProps: Partial<MenuProps>) => React.ReactElement<Menu>;
};

const ContextMenu: React.FC<ContextMenuProps> = ({
  triggerEvent = "onContextMenu",
  renderMenu,
  children,
  ...props
}) => {
  const { isVisible: menuIsVisible, hideMenu, showMenu } = useMenu();

  const menuRef = React.useRef<HTMLUListElement>(null);
  useOutsideClick(menuRef, hideMenu);

  const [menuStyles, setStyles] = React.useState({ top: 0, left: 0 });

  const handleContextMenuClick = React.useCallback(e => {
    e.preventDefault();

    const pos = {
      left: e.clientX,
      top: e.clientY
    };

    if (
      e.type === "touchend" &&
      (!pos.left || !pos.top) &&
      (e.changedTouches && e.changedTouches.length > 0)
    ) {
      pos.left = e.changedTouches[0].clientX;
      pos.top = e.changedTouches[0].clientY;
    }

    if (!pos.left || pos.left < 0) {
      pos.left = 0;
    }

    if (!pos.top || pos.top < 0) {
      pos.top = 0;
    }

    showMenu();
    setStyles(pos);
  }, []);

  const windowSize = useWindowSize();
  React.useEffect(
    () => {
      if (menuRef.current instanceof HTMLUListElement) {
        const { width: windowWidth, height: windowHeight } = windowSize;
        const styles = { ...menuStyles };
        const {
          offsetWidth: menuWidth,
          offsetHeight: menuHeight
        } = menuRef.current;

        if (windowWidth && styles.left + menuWidth > windowWidth) {
          styles.left -= styles.left + menuWidth - windowWidth;
        }

        if (windowHeight && styles.top + menuHeight > windowHeight) {
          styles.top -= styles.top + menuHeight - windowHeight;
        }

        setStyles(styles);
      }
    },
    [menuRef.current, windowSize, menuIsVisible]
  );

  return (
    <>
      <span
        className="dp-ContextMenuWrapper"
        style={{ display: "inline-block" }}
        {...{
          [triggerEvent]: handleContextMenuClick
        }}
        {...props}
      >
        {children}
      </span>
      <Portal>
        {menuIsVisible &&
          renderMenu({ style: menuStyles, menuRef, onMenuClose: hideMenu })}
      </Portal>
    </>
  );
};

export default ContextMenu;
