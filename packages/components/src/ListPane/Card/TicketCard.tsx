import * as React from "react";

import Card, { BasicCardProps } from "./Card";
import CardTitle from "./CardTitle";
import Checkbox, { CheckableCardProps } from "./CardCheckbox";
import IconGroup from "../../elements/Icon/IconGroup";
import Icon from "../../elements/Icon/Icon";

export type TicketCardProps = {
  icons?: React.ReactNode;
  statusLabel?: React.ReactNode;
  isFavorite?: boolean;
  onFavoriteToggle?(cardId: React.Key, e: React.MouseEvent<HTMLElement>): void;
};

const TicketCard: React.FC<
  BasicCardProps & CheckableCardProps & TicketCardProps
> = ({
  cardId,
  title,
  icons,
  statusLabel,
  isFavorite = false,
  onFavoriteToggle,
  checkable,
  checked,
  onCheck,
  children,
  ...props
}) => (
  <Card cardId={cardId} {...props}>
    <span className="dp-LevelCol">
      {!!checkable && (
        <Checkbox
          cardId={cardId}
          checkable={checkable}
          checked={checked}
          onCheck={onCheck}
        />
      )}
    </span>
    <span className="dp-LevelCol">
      <CardTitle
        title={
          <>
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
          </>
        }
      />
      {children}
    </span>
    <span className="dp-LevelCol dp-LevelRight">
      {!!icons && <IconGroup>{icons}</IconGroup>}
      {!!statusLabel && <span className="dp-TimeStatus">{statusLabel}</span>}
    </span>
  </Card>
);

export default TicketCard;
