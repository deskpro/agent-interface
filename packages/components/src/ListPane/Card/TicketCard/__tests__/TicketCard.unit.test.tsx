import * as React from "react";
import { render } from "react-testing-library";
import { addWeeks } from "date-fns";

import ActivityStatus from "../../../../User/ActivityStatus/ActivityStatus";
import Icon from "../../../../elements/Icon/Icon";
import TicketCard from "../TicketCard";
import UserInfo from "../../../../User/UserInfo/UserInfo";

describe("<TicketCard />", () => {
  it("should match its snapshot", () => {
    const date = new Date();
    const onCheck = jest.fn();
    const { container } = render(
      <TicketCard
        className="test-card"
        cardId={1}
        title="Card title"
        checkable
        onCheck={onCheck}
        icons={
          <>
            <ActivityStatus status="writing">
              <div>Avatar</div>
            </ActivityStatus>
            <Icon name="beetle" circle />
            <TicketCard.StatusIcon
              urgency={1}
              status="awaiting_agent.announcement"
            />
          </>
        }
        status={
          <TicketCard.Status
            nextSlaStatus={{
              isComplete: false,
              nextTriggerDate: addWeeks(date, 2),
              status: "ok"
            }}
          />
        }
      >
        <UserInfo name="John Doe" email="john.doe@example.com" avatar />
      </TicketCard>
    );
    expect(container.querySelector(".test-card")).toMatchSnapshot();
  });
});
