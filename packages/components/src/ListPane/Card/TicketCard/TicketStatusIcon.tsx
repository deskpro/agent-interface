import * as React from "react";
import Icon from "../../../elements/Icon/Icon";
import Badge from "../../../elements/Badges/Badge";

export type TicketStatusIconProps = {
  status: string;
  urgency?: number;
};

const badgeColors: DPColor[] = [
  "grey",
  "neutral",
  "neutral",
  "neutral",
  "warning",
  "warning",
  "warning",
  "danger",
  "danger",
  "danger"
];

const TicketStatusIcon: React.FC<TicketStatusIconProps> = ({
  status,
  urgency
}) => {
  const [mainStatus] = status.split(".");

  if (mainStatus === "awaiting_agent") {
    return (
      <Badge
        type="round"
        color={
          !!urgency && urgency > 0 && urgency <= badgeColors.length
            ? badgeColors[urgency - 1]
            : "grey"
        }
      >
        {urgency}
      </Badge>
    );
  }
  switch (status) {
    case "awaiting_user":
      return <Icon name="avatar" size={18} color="pink" title={status} />;

    case "pending":
      return <Icon name="history" size={18} color="purple" title={status} />;

    case "resolved":
      return <Icon name="approve" size={18} color="success" title={status} />;

    case "hidden":
      return <Icon name="on-hold" size={18} color="grey" title={status} />;

    default:
      return null;
  }
};

export default TicketStatusIcon;
