import * as React from "react";
import { Manager, Reference, Popper } from "react-popper";

import Icon from "../Icon/Icon";
import { MenuProps } from "../Menu/Menu";
import useMenu from "../../hooks/useMenu";
import useOutsideClick from "../../hooks/useOutsideClick";

export type OptionListItemGearProps = {
  renderGearMenu: (menuProps: Partial<MenuProps>) => React.ReactElement<any>;
};

const OptionListItemGear: React.FC<OptionListItemGearProps> = ({
  renderGearMenu
}) => {
  const { isVisible: menuIsVisible, toggleMenu, hideMenu } = useMenu();

  const gearMenuRef = React.useRef<HTMLSpanElement>(null);
  useOutsideClick(gearMenuRef, hideMenu);

  return (
    <span className="dp-OptionList-itemGearMenu" ref={gearMenuRef}>
      <Manager>
        <Reference>
          {({ ref }) => (
            <Icon name="settings" size={12} onClick={toggleMenu} ref={ref} />
          )}
        </Reference>
        {menuIsVisible && (
          <Popper
            placement="right-start"
            modifiers={{
              offset: { offset: "-1,5" },
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
              renderGearMenu({ menuRef: ref, style, onMenuClose: hideMenu })
            }
          </Popper>
        )}
      </Manager>
    </span>
  );
};

export default OptionListItemGear;
