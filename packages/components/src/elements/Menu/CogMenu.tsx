import * as React from "react";
import classNames from "classnames";

import Icon from "../Icon/Icon";
import { MenuProps } from "./Menu";
import useOutsideClick from "../../hooks/useOutsideClick";
// import useWindowSize from "../../hooks/useWindowSize";
import useMenu from "../../hooks/useMenu";

/* const COG_SIZE = 18;
const defaultMenuStyles = {
  marginLeft: 2,
  marginTop: 5
};

function useCogMenuPosition(menuRef, isVisible) {
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
          defaultMenuStyles.marginLeft + menuWidth > windowWidth
        ) {
          styles.marginLeft = -menuWidth + COG_SIZE;
        }

        if (
          windowHeight &&
          defaultMenuStyles.marginTop + menuHeight > windowHeight
        ) {
          styles.marginTop = -menuHeight - COG_SIZE;
        }
      }
      setMenuStyles(styles);
    },
    [menuRef.current, windowSize, isVisible]
  );

  return menuStyles;
} */

export type CogProps = {
  renderMenu: (menuProps: Partial<MenuProps>) => React.ReactElement<any>;
  className?: string;
  isVisible?: boolean;
  style?: any;
  placement?: string;
  popperRef?: any;
};

const Cog: React.FC<CogProps> = ({
  className,
  renderMenu,
  isVisible = false,
  style,
  placement,
  popperRef
}) => {
  const { isVisible: menuIsVisible, hideMenu, toggleMenu } = useMenu();

  const cogRef = React.useRef<HTMLSpanElement>(null);
  useOutsideClick(cogRef, hideMenu);

  const menuRef = React.useRef<HTMLUListElement>(null);
  // const menuStyles = useCogMenuPosition(menuRef, menuIsVisible);
  const [isMouseOver, setIsMouseOver] = React.useState(false);

  if (!isVisible && !menuIsVisible && !isMouseOver) {
    return null;
  }

  return (
    <span
      className={classNames("dp-Cog", className, {
        "is-active": menuIsVisible
      })}
      style={style}
      role="button"
      tabIndex={-1}
      ref={ref => {
        (cogRef.current as HTMLSpanElement | null) = ref;
        if (typeof popperRef === "function") {
          popperRef(ref);
        }
      }}
      data-placement={placement}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <Icon name="settings" size={12} circle onClick={toggleMenu} />
      {menuIsVisible &&
        renderMenu({
          menuRef,
          // style: menuStyles,
          onMenuClose: hideMenu
        })}
    </span>
  );
};

export default React.memo(Cog);
