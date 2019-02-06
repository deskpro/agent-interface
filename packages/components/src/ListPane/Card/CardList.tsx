import * as React from "react";
import classNames from "classnames";

import "@deskpro/agent-interface-style/dist/components/dp-ListPane.css";

export type CardListProps = {
  className?: string;
  hoverable?: boolean;
};

const CardList: React.FC<CardListProps> = ({
  children,
  className,
  hoverable = false
}) => (
  <div
    className={classNames("dp-CardList", className, {
      "is-hoverable": hoverable
    })}
    role="list"
  >
    {children}
  </div>
);

export default CardList;
