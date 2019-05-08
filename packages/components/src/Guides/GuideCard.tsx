import * as React from "react";
import classNames from "classnames";

import Card from "../ListPane/Card/Card";
import SimpleCard, { SimpleCardProps } from "../ListPane/Card/SimpleCard";
import Icon from "../elements/Icon/Icon";
import Tag from "../elements/Badges/Tag";
import IconGroup from "../elements/Icon/IconGroup";

export type GuideCardProps = {
  expandable?: boolean;
  expanded?: boolean;
  onExpandToggle?: (cardId: React.Key) => void;
  dragHandleProps?: any;
  status: "published" | "draft";
};

const GuideCard: React.FC<SimpleCardProps & GuideCardProps> = ({
  cardId,
  title,
  status,
  className,
  dragHandleProps = {},
  expandable = false,
  expanded = false,
  onExpandToggle,
  ...cardProps
}) => (
  <SimpleCard
    cardId={cardId}
    {...cardProps}
    className={classNames("dp-Level", className)}
    title={
      <>
        <span className="dp-LevelTop">
          <Icon name="drag" size={14} {...dragHandleProps} />
        </span>
        {!!title && <Card.Title>{title}</Card.Title>}
      </>
    }
    icons={
      expandable && (
        <IconGroup>
          <Icon
            name={expanded ? "caret-up" : "caret-down"}
            size={15}
            color="primary"
            onClick={e => {
              if (typeof onExpandToggle === "function") {
                e.stopPropagation();
                onExpandToggle(cardId);
              }
            }}
          />
        </IconGroup>
      )
    }
    status={
      status === "draft" && (
        <Tag size="small" color="grey">
          Draft
        </Tag>
      )
    }
  />
);

export default GuideCard;
