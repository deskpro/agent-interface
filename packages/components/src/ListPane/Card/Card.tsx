import * as React from "react";
import classNames from "classnames";

import "@deskpro/agent-interface-style/dist/components/dp-ListPane.css";

export type CardProps = {
  className?: string;
  selected: boolean;
  title: string | React.ReactNode;
  onClick?(event: React.MouseEvent<HTMLElement>): void;
  children: React.ReactChildren;
  leftColumn: React.ReactNode;
  rightColumn: React.ReactNode;
};

const Card: React.SFC<CardProps> = ({
  className,
  leftColumn,
  rightColumn,
  children,
  selected = false,
  title
  // onClick
}) => (
  <div
    className={classNames("dp-Card dp-Level", className, {
      "is-active": selected
    })}
  >
    <span className="dp-LevelItem dp-LevelCol dp-LevelTop">{leftColumn}</span>
    <span className="dp-LevelCol">
      <span className="dp-Card-title">{title}</span>
      {children}
    </span>
    <span className="dp-LevelCol dp-LevelRight">{rightColumn}</span>
  </div>
);

export default Card;
