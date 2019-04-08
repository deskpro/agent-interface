import * as React from "react";
import OptionList from "./OptionList";
import Menu from "../Menu/Menu";

export type OptionItemSettings = {
  name: React.Key;
  text: string;
};

export type OptionItemType = {
  name: React.Key;
  title: string;
  disabled?: boolean;
  checked?: boolean;
  settings?: OptionItemSettings[];
};

export type StandardOptionListProps = {
  name: string;
  className?: string;
  items: OptionItemType[];
  sortable?: boolean;
  onOrderChange?: (
    itemName: React.Key,
    oldPosition: number,
    newPosition: number
  ) => void;
  checkable?: boolean;
  onCheck?: (itemName: React.Key, checked: boolean) => void;
  onSettingChange?: (settingName: React.Key, checked: boolean) => void;
};

const StandardOptionList: React.FC<StandardOptionListProps> = ({
  items,
  onCheck,
  onSettingChange,
  ...props
}) => (
  <OptionList {...props}>
    {items.map(({ settings, ...item }) => (
      <OptionList.Item
        {...item}
        key={item.name}
        onCheck={onCheck}
        renderGearMenu={
          settings
            ? menuProps => (
                <Menu
                  {...menuProps}
                  isCheckable
                  onItemCheck={onSettingChange}
                  checkedItems={[settings[0].name]}
                >
                  {settings.map(setting => (
                    <Menu.MenuItem {...setting} key={setting.name} />
                  ))}
                </Menu>
              )
            : undefined
        }
      />
    ))}
  </OptionList>
);

export default StandardOptionList;
