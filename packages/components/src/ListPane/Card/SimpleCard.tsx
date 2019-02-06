import * as React from "react";
import classNames from "classnames";

import Card, { ICardModel, CheckableCardProps, BasicCardProps } from "./Card";
import Checkbox from "../../inputs/Checkbox/Checkbox";

export type SimpleCardProps<M> = {
  model: M;
  status?: React.ReactNode;
} & BasicCardProps &
  CheckableCardProps;

const SimpleCard: React.FC<SimpleCardProps<ICardModel>> = ({
  model,
  title,
  className,
  children,
  status,
  checkable = false,
  checked = false,
  onCheck,
  ...props
}) => (
  <Card {...props} className={classNames("dp-Level", className)}>
    {checkable && (
      <span className="dp-LevelItem dp-LevelCol dp-LevelTop">
        <Checkbox
          id={model.id as string}
          value={model.id}
          checked={checked}
          onChange={onCheck}
        />
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
