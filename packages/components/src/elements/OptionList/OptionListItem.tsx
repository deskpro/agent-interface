import * as React from "react";
import classNames from "classnames";
import { Manager, Reference, Popper } from "react-popper";

import { MenuProps } from "../Menu/Menu";
import Checkbox from "../../inputs/Checkbox/Checkbox";
import Icon from "../Icon/Icon";
import useMenu from "../../hooks/useMenu";

export type OptionListItemProps = {
  name: React.Key;
  title: string;
  disabled?: boolean;
  checkable?: boolean;
  checked?: boolean;
  onCheck?: (itemName: React.Key, checked: boolean) => void;
  renderGearMenu?: (menuProps: Partial<MenuProps>) => React.ReactElement<any>;
  isDragging?: boolean;
  draggableProps?: any;
  dragHandleProps?: any;
  innerRef?: React.Ref<HTMLElement>;
};

const OptionListItem: React.FC<OptionListItemProps> = ({
  name,
  title,
  disabled,
  checkable,
  checked,
  onCheck,
  renderGearMenu,
  isDragging = false,
  draggableProps = {},
  dragHandleProps = {},
  innerRef
}) => {
  const { isVisible: menuIsVisible, toggleMenu } = useMenu();

  return (
    <div
      className={classNames("dp-OptionList-item dp-Menu-linkItem", {
        "dp-Uneditable": disabled,
        "is-dragging": isDragging
      })}
      ref={innerRef}
      {...draggableProps}
    >
      {!!dragHandleProps && <Icon name="drag" size={12} {...dragHandleProps} />}
      {checkable && (
        <Checkbox
          disabled={disabled}
          id={name as string}
          name={name as string}
          checked={checked}
          onChange={(e: React.FormEvent) => {
            if (onCheck) {
              const {
                name: itemName,
                checked: isItemChecked
              } = e.target as HTMLInputElement;
              onCheck(itemName, isItemChecked);
            }
          }}
        />
      )}
      {title}

      {!!renderGearMenu && (
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
              {({ ref, style }) => renderGearMenu({ menuRef: ref, style })}
            </Popper>
          )}
        </Manager>
      )}
    </div>
  );
};

export default OptionListItem;
