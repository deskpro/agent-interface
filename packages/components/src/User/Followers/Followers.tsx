import * as React from "react";
import classNames from "classnames";
import Icon from "../../elements/Icon/Icon";
import Button from "../../Button/Button";

import "@deskpro/agent-interface-style/dist/components/dp-Sidebar.css";
import "@deskpro/agent-interface-style/dist/components/dp-Ticketview.css";
import FollowerItem from "./FollowerItem";

export interface FollowerInfo {
  id: React.Key;
  name: string;
  avatar?: React.ReactNode;
}

export type FollowersProps = {
  className?: string;
  style?: any;
  agents: FollowerInfo[];
  isFollowed?: boolean;
  onFollowToggle: () => void;
  onRemove: (userId: React.Key) => void;
  onAdd: () => void;
};

const Followers: React.FC<FollowersProps> = ({
  agents,
  className,
  isFollowed = false,
  onFollowToggle,
  onRemove,
  onAdd
}) => (
  <div className={classNames("dp-Followers", className)}>
    <div className="dp-SectionControls">
      <div className="dp-SectionTitle">
        <div className="dp-TitleControls">
          Followers <span className="dp-qt">({agents.length})</span>
        </div>
        <Button
          variant="link"
          onClick={onFollowToggle}
          className={classNames("dp-StatusTimes dp-FollowersStatus", {
            "is-active": isFollowed
          })}
        >
          {isFollowed ? "Following" : "Follow"}
          {isFollowed && <Icon name="following" color="primary" size={10} />}
        </Button>
      </div>
    </div>
    <div
      className={classNames("dp-FollowerList", {
        "Followers--Medium": agents.length > 7 && agents.length < 25,
        "Followers--Large": agents.length > 24
      })}
    >
      {agents.map(({ id, ...agentInfo }) => (
        <FollowerItem key={id} id={id} {...agentInfo} onRemove={onRemove} />
      ))}

      <span className="dp-FollowersBtn">
        <Button variant="link" size="small" onClick={onAdd}>
          <Icon name="add-follower" color="primary" size={10} />
          <span>Add</span>
        </Button>
      </span>
    </div>
  </div>
);

export default Followers;
