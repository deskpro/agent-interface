import * as React from "react";
import classNames from "classnames";

import { MenuProps } from "../Menu/Menu";
import Checkbox from "../../inputs/Checkbox/Checkbox";
import Icon from "../Icon/Icon";
import GearMenu from "./OptionListItemGear";

export type OptionListItemProps = {
  name: React.Key;
  title: string;
  disabled?: boolean;
  checkable?: boolean;
  checked?: boolean;
  onCheck?: (itemName: React.Key, checked: boolean) => void;
  renderGearMenu?: (menuProps: Partial<MenuProps>) => React.ReactElement<any>;
  showDragHandle?: boolean;
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
  showDragHandle = false,
  isDragging = false,
  draggableProps = {},
  dragHandleProps = {},
  innerRef
}) => (
  <div
    className={classNames("dp-OptionList-item dp-Menu-linkItem", {
      "dp-Uneditable": disabled,
      "is-dragging": isDragging
    })}
    ref={innerRef}
    {...draggableProps}
  >
    {showDragHandle && <Icon name="drag" size={12} {...dragHandleProps} />}
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

    {!!renderGearMenu && <GearMenu renderGearMenu={renderGearMenu} />}
  </div>
);

export default OptionListItem;
