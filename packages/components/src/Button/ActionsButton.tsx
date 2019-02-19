import * as React from "react";

import Button, { ButtonProps } from "./Button";
import Portal from "../common/Portal/Portal";
import useWindowSize from "../hooks/useWindowSize";
import useOutsideClick from "../hooks/useOutsideClick";
import useMenu from "../hooks/useMenu";
import { MenuProps } from "../elements/Menu/Menu";

export type ActionsButtonProps = ButtonProps & {
  renderMenu: (menuProps: Partial<MenuProps>) => React.ReactElement<any>;
};

function useMenuPosition(buttonRef, menuRef, isVisible) {
  const windowSize = useWindowSize();
  const [menuStyles, setStyles] = React.useState({ top: 0, left: 0 });

  React.useEffect(
    () => {
      if (!isVisible) {
        return;
      }
      const styles = { ...menuStyles };
      if (buttonRef.current instanceof HTMLButtonElement) {
        styles.left = buttonRef.current.offsetLeft;
        styles.top =
          buttonRef.current.offsetTop + buttonRef.current.offsetHeight + 3;

        if (menuRef.current instanceof HTMLUListElement) {
          const { width: windowWidth, height: windowHeight } = windowSize;
          if (
            windowWidth &&
            styles.left + menuRef.current.offsetWidth > windowWidth
          ) {
            styles.left -=
              menuRef.current.offsetWidth - buttonRef.current.offsetWidth;
          }
          if (
            windowHeight &&
            styles.top + menuRef.current.offsetHeight > windowHeight
          ) {
            styles.top -=
              menuRef.current.offsetHeight + buttonRef.current.offsetHeight;
          }
        }
      }

      setStyles(styles);
    },
    [buttonRef, menuRef, isVisible]
  );

  return menuStyles;
}

const ActionsButton = ({ renderMenu, ...props }) => {
  const { isVisible: menuIsVisible, hideMenu, toggleMenu } = useMenu();

  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLUListElement>(null);
  useOutsideClick(buttonRef, hideMenu);
  const menuStyles = useMenuPosition(buttonRef, menuRef, menuIsVisible);

  return (
    <>
      <Button
        {...props}
        onClick={toggleMenu}
        variant="actions"
        buttonRef={buttonRef}
      />
      <Portal>
        {menuIsVisible &&
          renderMenu({
            menuRef,
            style: menuStyles,
            onMenuClose: hideMenu
          })}
      </Portal>
    </>
  );
};

export default ActionsButton;
