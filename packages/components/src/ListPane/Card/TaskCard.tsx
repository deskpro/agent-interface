import * as React from "react";
import classNames from "classnames";
import Card, { CardProps, CheckableCardProps, ICardModel } from "./Card";
import Checkbox from "../../inputs/Checkbox/Checkbox";
import { Icon } from "../..";

export interface TaskModel extends ICardModel {
  title: string;
  isCompleted?: boolean;
  commentsCount?: number;
}

export type TaskCardProps = {};

const TaskCard: React.FunctionComponent<
  TaskCardProps & CardProps<TaskModel> & CheckableCardProps
> = ({
  model,
  className,
  checkable = false,
  checked,
  onCheck,
  renderBody,
  ...props
}) => (
  <Card
    model={model}
    {...props}
    className={classNames("LevelCol", "dp-Tasks-list", className)}
  >
    <span className="dp-LevelItem Level-justify-between">
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
      {/* TODO: Replace with calendar component */}
      <span className="dp-DateGroup">
        <span className="dp-Icon dp-group" />
        <span className="dp-Date-link">Today : 4pm</span>
      </span>
    </span>
    <span className="dp-LevelItem dp-LevelLeft">
      {!!renderBody && renderBody(model)}
    </span>
    <span className="dp-LevelItem Level-justify-between">
      <span className="dp-UserInfo">
        <span className="dp-Icon dp-Visibility" />
        <span className="dp-UserName dp-Department">Department</span>
        <span className="dp-Icon dp-iconUserAvatar" />
        <span className="dp-UserName">Me</span>
      </span>
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
