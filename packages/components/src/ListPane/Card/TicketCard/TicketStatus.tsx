import * as React from "react";
import IconGroup from "../../../elements/Icon/IconGroup";
import Icon from "../../../elements/Icon/Icon";
import Tag from "../../../elements/Badges/Tag";

export type TicketStatusProps = {
  isLocked?: boolean;
  icons: React.ReactNode;
  lastUpdate?: string | Date;
  nextSlaStatus?: {
    status: "ok" | "warning" | "fail";
    isComplete?: boolean;
    nextTriggerDate: string | Date;
  };
};

const TicketStatus: React.FC<TicketStatusProps> = ({
  isLocked = false,
  icons,
  lastUpdate,
  nextSlaStatus
}) => (
  <>
    {(!!icons || isLocked) && (
      <IconGroup>
        {!!isLocked && <Icon name="lock" size={18} color="grey-darkest" />}
        {icons}
      </IconGroup>
    )}
    {(!!lastUpdate || !!nextSlaStatus) && (
      <span className="dp-TimeStatus">
        {!!nextSlaStatus && !nextSlaStatus.isComplete ? (
          <>
            {nextSlaStatus.status === "ok" && (
              <Tag size="small" color="grey">
                {nextSlaStatus.nextTriggerDate}
              </Tag>
            )}
            {nextSlaStatus.status === "warning" && (
              <Tag size="small" color="purple">
                {nextSlaStatus.nextTriggerDate}
              </Tag>
            )}
            {nextSlaStatus.status === "fail" && (
              <Tag size="small" color="danger">
                Failed
              </Tag>
            )}
          </>
        ) : (
          lastUpdate
        )}
      </span>
    )}
  </>
);

export default TicketStatus;
