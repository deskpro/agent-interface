import React from "react";
import Chance from "chance";
import ReactAvatar from "react-avatar";

import { Followers } from "@deskpro/agent-interface-components";

const chance = new Chance();

const initialAvatars = [
  {
    id: 1,
    name: "Artem Berdyshev",
    avatar: (
      <ReactAvatar
        email="artem.berdyshev@deskpro.com"
        name="Artem Berdyshev"
        size={12}
        round
      />
    )
  },
  {
    id: 2,
    name: "Chris Nadeau",
    avatar: (
      <ReactAvatar
        email="chris.nadeau@deskpro.com"
        name="Chris Nadeau"
        size={12}
        round
      />
    )
  },
  {
    id: 3,
    name: "Julien Ducro",
    avatar: (
      <ReactAvatar
        email="julien.ducro@deskpro.com"
        name="Julien Ducro"
        size={12}
        round
      />
    )
  },
  {
    id: 4,
    name: "Nick Green",
    avatar: (
      <ReactAvatar
        email="nick.green@deskpro.com"
        name="Nick Green"
        size={12}
        round
      />
    )
  }
];

const generateUser = id => {
  const name = `${chance.first()} ${chance.last()}`;
  return {
    id,
    name,
    avatar: <ReactAvatar name={name} size={12} round />
  };
};

const FollowersDemo = ({ count = 4 }) => {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    setItems(
      initialAvatars.concat(
        Array.from({ length: count - 4 > 0 ? count - 4 : 0 }, (_, idx) =>
          generateUser(idx + 5)
        )
      )
    );
  }, [count]);

  const handleRemoveFollower = React.useCallback(
    userId => {
      setItems(items.filter(i => i.id !== userId));
    },
    [items, setItems]
  );

  const [isFollowed, setFollowed] = React.useState(false);
  const handleFollowedToggle = React.useCallback(() => {
    setFollowed(!isFollowed);
  }, [isFollowed, setFollowed]);

  return (
    <Followers
      agents={items}
      isFollowed={isFollowed}
      onFollowToggle={handleFollowedToggle}
      onAdd={() => setItems(items.concat(generateUser(items.length + 1)))}
      onRemove={handleRemoveFollower}
    />
  );
};

export default FollowersDemo;
