import * as React from "react";
import { Manager, Reference, Popper } from "react-popper";

import Button, { ButtonProps } from "./Button";
import useMenu from "../hooks/useMenu";
import { MenuProps } from "../elements/Menu/Menu";

export type ActionsButtonProps = ButtonProps & {
  renderMenu: (menuProps: Partial<MenuProps>) => React.ReactElement<any>;
};

const ActionsButton = ({ renderMenu, ...props }) => {
  const { isVisible: menuIsVisible, hideMenu, toggleMenu } = useMenu();
  return (
    <Manager>
      <Reference>
        {({ ref }) => (
          <Button {...props} onClick={toggleMenu} variant="actions" ref={ref} />
        )}
      </Reference>

      {menuIsVisible && (
        <Popper
          placement="bottom-start"
          modifiers={{
            offset: { offset: "0,2" },
            preventOverflow: {
              enabled: true,
              escapeWithReference: true,
              boundariesElement: "viewport"
            },
            flip: {
              enabled: true,
              flipVariationsByContent: true
            }
          }}
        >
          {({ ref, style }) =>
            renderMenu({
              menuRef: ref,
              style,
              onMenuClose: hideMenu
            })
          }
        </Popper>
      )}
    </Manager>
  );
};

export default ActionsButton;
