import * as React from "react";
import { render } from "react-testing-library";

import IconGroup from "../IconGroup";
import Icon from "../Icon";
import Badge from "../../Badges/Badge";
import ActivityStatus from "../../../User/ActivityStatus/ActivityStatus";

describe("<IconGroup />", () => {
  it("should match is snapshot", () => {
    const { container } = render(
      <IconGroup className="icon-group">
        <ActivityStatus status="viewing">
          <Icon name="avatar" size={16} />
          <Icon name="avatar" size={16} />
        </ActivityStatus>
        <Icon name="beetle" size={18} circle />
        <Badge color="grey-light" type="round" />
        <Badge color="purple" type="round" />
      </IconGroup>
    );
    expect(container.querySelector(".icon-group")).toMatchSnapshot();
  });
});
