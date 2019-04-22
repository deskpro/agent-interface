import * as React from "react";
import { Manager, Reference, Popper } from "react-popper";

import Icon from "../../elements/Icon/Icon";

export type FollowerItemProps = {
  id: React.Key;
  name: string;
  avatar?: React.ReactNode;
  onRemove: (itemId: React.Key) => void;
};

const FollowerItem: React.FC<FollowerItemProps> = ({
  id,
  name,
  avatar,
  onRemove
}) => {
  const [isHovered, setHoveredState] = React.useState(false);
  return (
    <Manager>
      <Reference>
        {({ ref }) => (
          <span
            ref={ref}
            className="dp-FollowersItem"
            onMouseEnter={() => setHoveredState(true)}
            onMouseLeave={() => setHoveredState(false)}
          >
            <span className="dp-LogoName">
              {avatar}
              <span className="dp-UserName">{name}</span>
            </span>
            <Icon name="close" onClick={() => onRemove(id)} size={8} />
          </span>
        )}
      </Reference>
      {isHovered && (
        <Popper
          positionFixed={false}
          placement="right-end"
          modifiers={{ offset: { offset: "20" } }}
        >
          {({ ref, style }) => (
            <span className="dp-ToolTips" ref={ref} style={style}>
              {name}
            </span>
          )}
        </Popper>
      )}
    </Manager>
  );
};

export default FollowerItem;
