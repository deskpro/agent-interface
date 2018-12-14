import * as React from "react";
import classNames from "classnames";

import "@deskpro/agent-interface-style/dist/components/dp-ListPane.css";

export type CardListProps = {
  className?: string;
  hoverable?: boolean;
};

const CardList: React.SFC<CardListProps> = ({
  children,
  className,
  hoverable = false
}) => (
  <div
    className={classNames("dp-CardList", className, {
      "is-hoverable": hoverable
    })}
  >
    {children}
  </div>
);

export default CardList;
