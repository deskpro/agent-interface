import * as React from "react";
import Icon from "../../../elements/Icon/Icon";
import Badge from "../../../elements/Badges/Badge";

export type TicketStatusIconProps = {
  status: string;
  urgency?: number;
};

const TicketStatusIcon: React.FC<TicketStatusIconProps> = ({
  status,
  urgency
}) => {
  const [mainStatus] = status.split(".");

  if (mainStatus === "awaiting_user") {
    return (
      <Badge type="round" color="warning">
        {urgency}
      </Badge>
    );
  }
  return <Icon name="avatar" size={18} color="grey-dark" title={status} />;
};

export default TicketStatusIcon;
