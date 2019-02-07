import * as React from "react";
import classNames from "classnames";

import Card, { BasicCardProps } from "./Card";
import Checkbox, { CheckableCardProps } from "./CardCheckbox";

export type SimpleCardProps = {
  status?: React.ReactNode;
} & BasicCardProps &
  CheckableCardProps;

const SimpleCard: React.FC<SimpleCardProps> = ({
  cardId,
  title,
  className,
  children,
  status,
  checkable = false,
  checked = false,
  onCheck,
  ...props
}) => (
  <Card
    cardId={cardId}
    {...props}
    className={classNames("dp-Level", className)}
  >
    {checkable && (
      <span className="dp-LevelItem dp-LevelCol dp-LevelTop">
        {!!checkable && (
          <Checkbox
            cardId={cardId}
            checkable={checkable}
            checked={checked}
            onCheck={onCheck}
          />
        )}
      </span>
    )}
    <span className="dp-LevelCol">
      {!!title && <Card.Title title={title} />}
      <span className="dp-Card-details">{children}</span>
    </span>
    {!!status && (
      <span className="dp-LevelCol dp-LevelRight dp-LevelTop">{status}</span>
    )}
  </Card>
);

export default SimpleCard;
