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
  icons?: React.ReactNode;
  actions?: CardActionItemType[];
  details?: React.ReactNode;
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
  icons,
  details,
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
    className={classNames(className, { "Check--nocheck": !checkable })}
  >
    <div className="dp-LevelItem Level-justify-between">
      <span className="dp-LevelLeft">
        {!!checkable && (
          <Checkbox
            cardId={cardId}
            checkable={checkable}
            checked={checked}
            onCheck={onCheck}
            className="dp-LevelTop"
          />
        )}
        {title}
      </span>
      {!!icons && <span className="dp-LevelRight">{icons}</span>}
    </div>
    <div className="dp-LevelItem Level-justify-between">
      <span className="dp-LevelLeft">{children}</span>
      {!!status && <span className="dp-LevelRight">{status}</span>}
    </div>
    {details}
    {actions.length > 0 && (
      <ul className="dp-Card-actionsRow">
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
