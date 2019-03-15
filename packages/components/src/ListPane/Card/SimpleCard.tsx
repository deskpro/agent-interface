import * as React from "react";
import classNames from "classnames";

import Card, { BasicCardProps } from "./Card";
import Checkbox, { CheckableCardProps } from "./CardCheckbox";
import Icon from "../../elements/Icon/Icon";

export type CardActionItemType = {
  name: React.Key;
  icon?: string;
  title: string;
};

export type SimpleCardProps = {
  status?: React.ReactNode;
  actions?: CardActionItemType[];
  onActionClick?: (
    actionName: React.Key,
    cardId: React.Key,
    e: React.SyntheticEvent
  ) => void;
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
  actions = [],
  onActionClick,
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
      {children}
    </span>
    {!!status && (
      <span className="dp-LevelCol dp-LevelRight dp-LevelTop">{status}</span>
    )}
    {actions.length > 0 && (
      <ul className="dp-LevelItem dp-Card-actionsRow">
        {actions.map(({ name, icon, title: actionTitle }) => (
          <li
            key={name}
            role="menuitem"
            onClick={(e: React.SyntheticEvent) =>
              onActionClick && onActionClick(name, cardId, e)
            }
            onKeyPress={e =>
              e.key === "Enter" &&
              onActionClick &&
              onActionClick(name, cardId, e)
            }
          >
            {!!icon && <Icon name={icon} size={15} />}
            {actionTitle}
          </li>
        ))}
      </ul>
    )}
  </Card>
);

export default SimpleCard;
