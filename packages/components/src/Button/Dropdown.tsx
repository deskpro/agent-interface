import * as React from "react";
import { Manager, Reference, Popper } from "react-popper";
import classNames from "classnames";

import "@deskpro/agent-interface-style/dist/dp-Arrow.css";
import { MenuProps } from "../elements/Menu/Menu";
import useOutsideClick from "../hooks/useOutsideClick";

export type DropdownProps = {
  className?: string;
  renderMenu: (menuProps: Partial<MenuProps>) => React.ReactElement<any>;
};

const Dropdown: React.FC<DropdownProps> = ({
  className,
  children,
  renderMenu
}) => {
  const [isOpen, setOpenState] = React.useState(false);
  const dropdownRef = React.useRef<HTMLSpanElement>(null);
  useOutsideClick(dropdownRef, () => {
    setOpenState(false);
  });

  return (
    <span className="dp-Dropdown-container" ref={dropdownRef}>
      <Manager>
        <Reference>
          {({ ref }) => (
            <span
              className={classNames("dp-Dropdown", className)}
              ref={ref}
              role="button"
              tabIndex={-1}
              onClick={() => setOpenState(!isOpen)}
              onKeyPress={e => {
                if (e.key === "Enter") setOpenState(!isOpen);
              }}
            >
              {children}
              <span className="dp-Arrow" />
            </span>
          )}
        </Reference>
        {isOpen && (
          <Popper
            placement="bottom-start"
            modifiers={{
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
                onMenuClose: () => setOpenState(false)
              })
            }
          </Popper>
        )}
      </Manager>
    </span>
  );
};

export default Dropdown;
