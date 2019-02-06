import * as React from "react";
import classNames from "classnames";
import Card, { BasicCardProps, CheckableCardProps, ICardModel } from "./Card";
import Checkbox from "../../inputs/Checkbox/Checkbox";
import { Icon } from "../..";

export interface TaskModel extends ICardModel {
  title: string;
  isCompleted?: boolean;
  commentsCount?: number;
}

export type TaskCardProps<M> = {
  model: M;
};

const TaskCard: React.FC<
  TaskCardProps<TaskModel> & BasicCardProps & CheckableCardProps
> = ({
  model,
  className,
  checkable = false,
  checked,
  onCheck,
  children,
  ...props
}) => (
  <Card
    {...props}
    className={classNames("LevelCol", "dp-Tasks-list", className)}
  >
    <span className="dp-LevelItem Level-justify-between">
      <span className="dp-Level">
        {checkable && (
          <Checkbox
            id={model.id as string}
            value={model.id}
            checked={checked}
            onChange={onCheck}
          />
        )}
        <Card.Title
          title={
            <>
              <Icon
                name="complete"
                color={model.isCompleted ? "neutral" : "success"}
                size={15}
              />
              {model.title}
            </>
          }
        />
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
          Comment <span className="dp-qt">({model.commentsCount || 0})</span>
          {!!model.commentsCount && <span className="dp-Arrow" />}
        </span>
      </span>
    </span>
  </Card>
);

export default TaskCard;
