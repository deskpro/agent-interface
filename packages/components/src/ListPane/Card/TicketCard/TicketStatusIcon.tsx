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
  return <Icon name="avatar" size={18} color="grey-dark" title={status} />;
};

export default TicketStatusIcon;
