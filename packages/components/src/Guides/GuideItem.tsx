import * as React from "react";
import classNames from "classnames";

import Icon from "../elements/Icon/Icon";

export interface GuideType {
  id: React.Key;
  title: string;
  icon?: string;
}

export type GuideItemProps = {
  id: React.Key;
  title: string;
  icon?: string;
  className?: string;
  onSettingsClick: (guideId: React.Key) => void;
  dragHandleProps?: any;
};

const GuideItem: React.FC<GuideItemProps> = ({
  id,
  title,
  icon,
  className,
  dragHandleProps,
  onSettingsClick
}) => {
  const [isSettingsIconVisible, setSettingsIconVisibility] = React.useState<
    boolean
  >(false);

  return (
    <div
      className={classNames("dp-Guide", className)}
      onMouseOver={() => setSettingsIconVisibility(true)}
      onFocus={() => setSettingsIconVisibility(true)}
      onMouseOut={() => setSettingsIconVisibility(false)}
      onBlur={() => setSettingsIconVisibility(false)}
    >
      <span className="dp-TitleGroupe">
        {!!dragHandleProps && (
          <Icon name="drag" size={15} {...dragHandleProps} />
        )}
        {!!icon && <Icon name={icon} size={24} circle />}
        {title}
      </span>
      <span className="dp-IconGroup">
        {isSettingsIconVisible && (
          <Icon name="settings" size={12} onClick={() => onSettingsClick(id)} />
        )}
      </span>
    </div>
  );
};

export default GuideItem;
