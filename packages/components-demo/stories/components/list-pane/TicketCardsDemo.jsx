import React from "react";
import { addHours, addMinutes, subMinutes, subHours } from "date-fns";
import Avatar from "react-avatar";

import {
  Card,
  Icon,
  ActivityStatus
} from "@deskpro/agent-interface-components";

export default ({ onCheck }) => (
  <div style={{ maxWidth: "500px" }}>
    <Card.List hoverable>
      <Card.SectionTitle>Tickets Card Demo</Card.SectionTitle>
      <Card.TicketCard
        cardId={1}
        title="Card title"
        checkable
        onCheck={onCheck}
        status={
          <Card.TicketCard.Status
            icons={
              <>
                <ActivityStatus status="writing">
                  <Avatar
                    email="berdartem@gmail.com"
                    name="Artem Berdyshev"
                    size={13}
                    round
                  />
                </ActivityStatus>
                <Icon name="beetle" circle />
                <Card.TicketCard.StatusIcon
                  urgency={1}
                  status="awaiting_agent.announcement"
                />
              </>
            }
            lastUpdate={subMinutes(new Date(), 22)}
            nextSlaStatus={{
              isComplete: false,
              nextTriggerDate: addHours(addMinutes(new Date(), 14), 2),
              status: "ok"
            }}
          />
        }
      >
        <Card.TicketCard.Details
          user={{
            name: "John Doe",
            email: "john.doe@example.com",
            avatar: true
          }}
        />
      </Card.TicketCard>
      <Card.TicketCard
        cardId={2}
        title="Card title"
        checkable
        onCheck={onCheck}
        status={
          <Card.TicketCard.Status
            icons={
              <>
                <ActivityStatus status="viewing">
                  <Avatar
                    email="chris.nadeau@deskpro.com"
                    name="Chris Nadeau"
                    size={13}
                    round
                  />
                  <Avatar
                    email="artem.berdyshev@deskpro.com"
                    name="Artem Berdyshev"
                    size={13}
                    round
                  />
                </ActivityStatus>
                <Icon name="on-hold" color="danger" size={18} />
                <Card.TicketCard.StatusIcon urgency={3} status="pending" />
              </>
            }
            lastUpdate="2 mins"
            nextSlaStatus={{
              isComplete: false,
              nextTriggerDate: addMinutes(new Date(), 14),
              status: "warning"
            }}
          />
        }
      >
        <Card.TicketCard.Details
          user={{
            name: "Jon Snow",
            email: "jon.snow@got.com",
            avatar: true
          }}
        />
      </Card.TicketCard>
      <Card.TicketCard
        cardId={3}
        title="Card title"
        checkable
        onCheck={onCheck}
        status={
          <Card.TicketCard.Status
            isLocked
            icons={
              <>
                <Icon name="history" color="warning" size={18} />
                <Card.TicketCard.StatusIcon
                  urgency={3}
                  status="awaiting_agent"
                />
                <Card.TicketCard.StatusIcon
                  urgency={10}
                  status="awaiting_agent.announcement"
                />
              </>
            }
            lastUpdate="2 mins"
            nextSlaStatus={{
              isComplete: false,
              nextTriggerDate: "Today",
              status: "fail"
            }}
          />
        }
      >
        <Card.TicketCard.Details
          user={{
            name: "John Doe",
            email: "john.doe@example.com",
            avatar: true
          }}
          labels={[
            { name: "Custom Work" },
            { name: "Report back", color: "purple" },
            { name: "Label", color: "transparent" }
          ]}
          properties={[
            { name: "Department", value: "Sales" },
            { name: "Assignee", value: "Me" }
          ]}
        />
      </Card.TicketCard>
      <Card.TicketCard
        cardId={4}
        title="Card title"
        checkable
        onCheck={onCheck}
        status={
          <Card.TicketCard.Status
            isLocked
            icons={
              <>
                <Icon name="bolt" color="grey-dark" size={18} />
                <Icon name="info" size={18} />
                <Card.TicketCard.StatusIcon
                  urgency={2}
                  status="awaiting_agent.announcement"
                />
                <Card.TicketCard.StatusIcon
                  urgency={7}
                  status="awaiting_agent.announcement"
                />
              </>
            }
            lastUpdate={subMinutes(new Date(), 22)}
            nextSlaStatus={{
              isComplete: true,
              nextTriggerDate: "Today",
              status: "fail"
            }}
          />
        }
      >
        Some text
      </Card.TicketCard>
      <Card.TicketCard
        cardId={5}
        title="Card title (statuses)"
        checkable
        onCheck={onCheck}
        status={
          <Card.TicketCard.Status
            icons={
              <>
                <Card.TicketCard.StatusIcon status="awaiting_user" />
                <Card.TicketCard.StatusIcon status="pending" />
                <Card.TicketCard.StatusIcon status="resolved" />
                <Card.TicketCard.StatusIcon status="hidden" />
              </>
            }
            lastUpdate={subHours(subMinutes(new Date(), 22), 2)}
            nextSlaStatus={{
              isComplete: true,
              nextTriggerDate: "Today",
              status: "fail"
            }}
          />
        }
      >
        Status icons for awaiting_user, pending, resolved, hidden
      </Card.TicketCard>
    </Card.List>
  </div>
);
