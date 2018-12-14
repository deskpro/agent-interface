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
  <div className={classNames("dp-Card", className, { "is-active": selected })}>
    <span className="dp-ItemCol">{leftColumn}</span>
    <span className="dp-ItemCol">
      <span className="dp-Card-title">{title}</span>
      {children}
    </span>
    <span className="dp-ItemCol">{rightColumn}</span>
  </div>
);

export default Card;
