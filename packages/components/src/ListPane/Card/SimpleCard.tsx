import * as React from "react";

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
  checkable = false,
  checked = false,
  onCheck,
  actions = [],
  onActionClick,
  ...props
}) => (
  <Card cardId={cardId} {...props} className={className}>
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
        {!!title && <Card.Title title={title} />}
      </span>
      {!!icons && <span className="dp-LevelRight">{icons}</span>}
    </div>
    <div className="dp-LevelItem Level-justify-between">
      <span className="dp-LevelCol">{children}</span>
      {!!status && <span className="dp-LevelRight">{status}</span>}
    </div>
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
