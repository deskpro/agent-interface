import React from "react";

import { Card, Icon } from "@deskpro/agent-interface-components";

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
                <Icon name="beetle" circle />
                <Card.TicketCard.StatusIcon
                  urgency={5}
                  status="awaiting_user.announcement"
                />
              </>
            }
            lastUpdate="2 mins"
            nextSlaStatus={{
              isComplete: false,
              nextTriggerDate: "2 hours",
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
                <Icon name="on-hold" color="danger" size={18} />
                <Card.TicketCard.StatusIcon urgency={3} status="pending" />
              </>
            }
            lastUpdate="2 mins"
            nextSlaStatus={{
              isComplete: false,
              nextTriggerDate: "Today",
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
        cardId={3}
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
              </>
            }
            lastUpdate="2 mins"
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
    </Card.List>
  </div>
);
