import * as React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import Icon from "../elements/Icon/Icon";

export interface GuideType {
  id: React.Key;
  title: string;
  icon?: string;
  slug: string;
}

export type GuideItemProps = GuideType & {
  className?: string;
  onSettingsClick: (guideId: React.Key) => void;
  dragHandleProps?: any;
};

const GuideItem: React.FC<GuideItemProps> = ({
  id,
  title,
  icon,
  slug,
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
      onMouseEnter={() => setSettingsIconVisibility(true)}
      onMouseLeave={() => setSettingsIconVisibility(false)}
    >
      <span className="dp-Guide-titleContainer">
        {!!dragHandleProps && (
          <Icon name="drag" size={15} {...dragHandleProps} />
        )}
        <Link to={slug} className="dp-Guide-title">
          {!!icon && <Icon name={icon} size={24} circle />}
          {title}
        </Link>
      </span>
      <span className="dp-Guide-actions">
        {isSettingsIconVisible && (
          <Icon name="settings" size={12} onClick={() => onSettingsClick(id)} />
        )}
      </span>
    </div>
  );
};

export default GuideItem;
