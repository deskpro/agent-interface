import * as React from "react";
import { render } from "react-testing-library";
import { addHours, addMinutes, subMinutes } from "date-fns";

import ActivityStatus from "../../../../User/ActivityStatus/ActivityStatus";
import Icon from "../../../../elements/Icon/Icon";
import TicketCard from "../TicketCard";

describe("<TicketCard />", () => {
  it("it should match its snapshot", () => {
    const date = new Date("2019-02-02 15:55:18");
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
            lastUpdate={subMinutes(date, 22)}
            nextSlaStatus={{
              isComplete: false,
              nextTriggerDate: addHours(addMinutes(date, 14), 2),
              status: "ok"
            }}
          />
        }
      >
        <TicketCard.Details
          user={{
            name: "John Doe",
            email: "john.doe@example.com",
            avatar: true
          }}
        />
      </TicketCard>
    );
    expect(container.querySelector(".test-card")).toMatchSnapshot();
  });
});
