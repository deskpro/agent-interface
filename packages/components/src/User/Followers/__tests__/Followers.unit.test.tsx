import * as React from "react";
import { render, fireEvent } from "react-testing-library";

import Followers from "../Followers";
import Icon from "../../../elements/Icon/Icon";

describe("<Followers />", () => {
  it("should match the snapshot for single follower", () => {
    const { container } = render(
      <Followers
        agents={[
          {
            id: 1,
            name: "Artem Berdyshev",
            avatar: <Icon name="avatar" size={10} />
          }
        ]}
        onRemove={jest.fn()}
        onAdd={jest.fn()}
        onFollowToggle={jest.fn()}
      />
    );

    expect(container.firstChild).toMatchSnapshot("Single follower");
  });

  it("should match the snapshot for 10 followers", () => {
    const agents = Array.from({ length: 10 }, (_, idx) => ({
      id: idx + 1,
      name: `Agent #${idx + 1}`,
      avatar: <Icon name="avatar" size={10} />
    }));
    const { container } = render(
      <Followers
        agents={agents}
        isFollowed
        onRemove={jest.fn()}
        onAdd={jest.fn()}
        onFollowToggle={jest.fn()}
      />
    );

    expect(container.firstChild).toMatchSnapshot("10 followers");
  });

  it("should match the snapshot for 25 followers", () => {
    const agents = Array.from({ length: 25 }, (_, idx) => ({
      id: idx + 1,
      name: `Agent #${idx + 1}`,
      avatar: <Icon name="avatar" size={10} />
    }));
    const { container } = render(
      <Followers
        agents={agents}
        onRemove={jest.fn()}
        onAdd={jest.fn()}
        onFollowToggle={jest.fn()}
      />
    );

    expect(container.firstChild).toMatchSnapshot("25 followers");
  });

  it("should change following state button text", () => {
    const handleFollowToggle = jest.fn();
    let { getByText } = render(
      <Followers
        agents={[
          {
            id: 1,
            name: "Artem Berdyshev",
            avatar: <Icon name="avatar" size={10} />
          }
        ]}
        onRemove={jest.fn()}
        onAdd={jest.fn()}
        onFollowToggle={handleFollowToggle}
      />
    );

    expect(getByText("Follow")).toBeInTheDocument();

    fireEvent.click(getByText("Follow"));
    expect(handleFollowToggle).toBeCalled();

    ({ getByText } = render(
      <Followers
        agents={[
          {
            id: 1,
            name: "Artem Berdyshev",
            avatar: <Icon name="avatar" size={10} />
          }
        ]}
        isFollowed
        onRemove={jest.fn()}
        onAdd={jest.fn()}
        onFollowToggle={handleFollowToggle}
      />
    ));
    expect(getByText("Following")).toBeInTheDocument();
  });

  it("should invoke onAdd event handler on click", () => {
    const handleAdd = jest.fn();
    const { getByText } = render(
      <Followers
        agents={[
          {
            id: 1,
            name: "Artem Berdyshev",
            avatar: <Icon name="avatar" size={10} />
          }
        ]}
        onRemove={jest.fn()}
        onAdd={handleAdd}
        onFollowToggle={jest.fn()}
      />
    );

    expect(getByText("Add")).toBeInTheDocument();

    fireEvent.click(getByText("Add").parentElement);
    expect(handleAdd).toBeCalled();
  });
});
