import * as React from "react";
import { distanceInWordsToNow } from "date-fns";

import Tag from "../../../elements/Badges/Tag";

export type TicketStatusProps = {
  lastUpdate?: string | Date;
  nextSlaStatus?: {
    status: "ok" | "warning" | "fail";
    isComplete?: boolean;
    nextTriggerDate: string | Date;
  };
};

const TicketStatus: React.FC<TicketStatusProps> = ({
  lastUpdate,
  nextSlaStatus
}) => (
  <span className="dp-TimeStatus">
    {!!nextSlaStatus && !nextSlaStatus.isComplete ? (
      <>
        {nextSlaStatus.status === "ok" && (
          <Tag size="small" color="grey">
            {nextSlaStatus.nextTriggerDate &&
              distanceInWordsToNow(nextSlaStatus.nextTriggerDate)}
          </Tag>
        )}
        {nextSlaStatus.status === "warning" && (
          <Tag size="small" color="pink">
            {nextSlaStatus.nextTriggerDate &&
              distanceInWordsToNow(nextSlaStatus.nextTriggerDate)}
          </Tag>
        )}
        {nextSlaStatus.status === "fail" && (
          <Tag size="small" color="danger">
            Failed
          </Tag>
        )}
      </>
    ) : (
      lastUpdate && distanceInWordsToNow(lastUpdate)
    )}
  </span>
);

export default TicketStatus;
