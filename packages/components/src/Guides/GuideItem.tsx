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
  isDragging?: boolean;
  onSettingsClick: (guideId: React.Key) => void;
  draggableProps?: any;
  dragHandleProps?: any;
  innerRef?: React.Ref<HTMLDivElement>;
};

const GuideItem: React.FC<GuideItemProps> = ({
  id,
  title,
  icon,
  slug,
  className,
  isDragging = false,
  draggableProps = {},
  dragHandleProps,
  onSettingsClick,
  innerRef
}) => {
  const [isSettingsIconVisible, setSettingsIconVisibility] = React.useState<
    boolean
  >(false);

  return (
    <div
      ref={innerRef}
      className={classNames("dp-Guide", className, {
        "is-dragging": isDragging
      })}
      onMouseEnter={() => setSettingsIconVisibility(true)}
      onMouseLeave={() => setSettingsIconVisibility(false)}
      {...draggableProps}
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
