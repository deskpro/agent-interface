import * as React from "react";
import classNames from "classnames";
import Card, { BasicCardProps } from "./Card";
import Checkbox, { CheckableCardProps } from "./CardCheckbox";
import { Icon } from "../..";

export type TaskCardProps = {};

const TaskCard: React.FC<
  TaskCardProps & BasicCardProps & CheckableCardProps
> = ({
  cardId,
  className,
  title,
  children,
  checked,
  checkable,
  onCheck,
  ...props
}) => (
  <Card
    cardId={cardId}
    {...props}
    className={classNames("LevelCol", "dp-Tasks-list", className)}
  >
    <span className="dp-LevelItem Level-justify-between">
      <span className="dp-Level">
        {!!checkable && (
          <Checkbox
            cardId={cardId}
            checkable={checkable}
            checked={checked}
            onCheck={onCheck}
          />
        )}
        <Card.Title>
          {/* <Icon
              name="complete"
              color={model.isCompleted ? "neutral" : "success"}
              size={15}
            /> */}
          {title}
        </Card.Title>
      </span>
      {/* TODO: Replace with calendar component */}
      <span className="dp-DateGroup">
        <span className="dp-Icon dp-group" />
        <span className="dp-Date-link">Today : 4pm</span>
      </span>
    </span>
    <span className="dp-LevelItem dp-LevelLeft">{children}</span>
    <span className="dp-LevelItem Level-justify-between">
      <ul className="dp-LevelWrap">
        <li>
          <Icon name="visibility" size={15} /> Department
        </li>
        <li>
          <Icon name="avatar" size={15} /> Me
        </li>
      </ul>
      <span className="dp-CommentWrap">
        <span className="dp-Icon dp-iconComents" />
        <span className="dp-Comments-title is-active">
          Comment <span className="dp-qt">({0})</span>
        </span>
      </span>
    </span>
  </Card>
);

export default TaskCard;
