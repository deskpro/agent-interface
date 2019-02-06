import * as React from "react";

import Card, { CheckableCardProps, BasicCardProps, ICardModel } from "./Card";
import CardTitle from "./CardTitle";
import Checkbox from "../../inputs/Checkbox/Checkbox";
import IconGroup from "../../elements/Icon/IconGroup";
import Icon from "../../elements/Icon/Icon";

export interface TicketModel extends ICardModel {
  title: string;
  isFavorite?: boolean;
}

export type TicketCardProps = {
  model: TicketModel;
  icons?: React.ReactNode;
  statusLabel?: React.ReactNode;
  onFavoriteToggle?(e: React.MouseEvent<HTMLElement>): void;
};

const TicketCard: React.FC<
  BasicCardProps & CheckableCardProps & TicketCardProps
> = ({
  title,
  model,
  icons,
  statusLabel,
  checkable = false,
  checked,
  onCheck,
  onFavoriteToggle,
  children,
  ...props
}) => (
  <Card {...props}>
    <span className="dp-LevelCol">
      {!!checkable && (
        <Checkbox
          id={model.id as string}
          value={model.id}
          checked={checked}
          onChange={onCheck}
        />
      )}
    </span>
    <span className="dp-LevelCol">
      <CardTitle
        title={
          <>
            {model.title}
            {model.isFavorite && (
              <Icon
                name="star"
                size={15}
                color="primary"
                onClick={onFavoriteToggle}
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
