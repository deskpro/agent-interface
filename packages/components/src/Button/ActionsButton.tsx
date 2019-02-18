import * as React from "react";

import Button, { ButtonProps } from "./Button";
import { MenuContext } from "../elements/Menu/MenuContext";
import Portal from "../common/Portal/Portal";
import useWindowSize from "../hooks/useWindowSize";

export type ActionsButtonProps = ButtonProps & {
  /** Unique identifier to use for menu */
  buttonId: string;
  renderMenu: (menuProps) => React.ReactElement<any>;
};

const ActionsButton = ({ buttonId, renderMenu, ...props }) => {
  const {
    visibleMenu,
    position,
    show,
    hide,
    updatePosition
  } = React.useContext(MenuContext);
  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLUListElement>(null);

  const handleButtonClick = React.useCallback(
    e => {
      if (visibleMenu === buttonId) {
        hide();
      } else {
        e.persist();
        show(e, { menuId: buttonId, menuType: "dropdown" });
      }
    },
    [visibleMenu]
  );

  const windowSize = useWindowSize();
  React.useEffect(
    () => {
      if (
        buttonRef.current instanceof HTMLButtonElement &&
        menuRef.current instanceof HTMLUListElement
      ) {
        const { width: windowWidth, height: windowHeight } = windowSize;
        let { x, y } = position;
        const { width, height } = buttonRef.current.getBoundingClientRect();
        if (windowWidth && x + menuRef.current.offsetWidth > windowWidth) {
          x -= menuRef.current.offsetWidth - width;
        }
        if (windowHeight && y + menuRef.current.offsetHeight > windowHeight) {
          y -= menuRef.current.offsetHeight + height;
        }
        updatePosition({ x, y });
      }
    },
    [buttonRef, visibleMenu === buttonId]
  );

  return (
    <>
      <Button
        {...props}
        onClick={handleButtonClick}
        variant="actions"
        buttonRef={buttonRef}
      />
      <Portal>
        {visibleMenu === buttonId &&
          renderMenu({
            menuId: buttonId,
            menuRef,
            style: { left: position.x, top: position.y }
          })}
      </Portal>
    </>
  );
};

export default ActionsButton;
