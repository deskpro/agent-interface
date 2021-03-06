import * as React from "react";

import SimpleCard, { SimpleCardProps } from "../SimpleCard";
import Icon from "../../../elements/Icon/Icon";
import IconGroup from "../../../elements/Icon/IconGroup";
import TicketStatus from "./TicketStatus";
import TicketStatusIcon from "./TicketStatusIcon";
import CardTitle from "../CardTitle";

type TicketCardSubcomponents = {
  Status: typeof TicketStatus;
  StatusIcon: typeof TicketStatusIcon;
};

export type TicketCardProps = {
  icons: React.ReactNode;
  isLocked?: boolean;
  isFavorite?: boolean;
  onFavoriteToggle?(cardId: React.Key, e: React.MouseEvent<HTMLElement>): void;
};

const TicketCard: React.FC<SimpleCardProps & TicketCardProps> &
  TicketCardSubcomponents = ({
  cardId,
  title,
  icons,
  isLocked = false,
  isFavorite = false,
  onFavoriteToggle,
  ...props
}) => (
  <SimpleCard
    cardId={cardId}
    {...props}
    title={
      <CardTitle>
        {title}
        {isFavorite && (
          <Icon
            name="star"
            size={15}
            color="primary"
            onClick={(e: React.MouseEvent<HTMLElement>) =>
              onFavoriteToggle && onFavoriteToggle(cardId, e)
            }
          />
        )}
      </CardTitle>
    }
    icons={
      (!!icons || isLocked) && (
        <IconGroup>
          {!!isLocked && <Icon name="lock" size={18} color="grey-darkest" />}
          {icons}
        </IconGroup>
      )
    }
  />
);

TicketCard.Status = TicketStatus;
TicketCard.StatusIcon = TicketStatusIcon;

export default TicketCard;
