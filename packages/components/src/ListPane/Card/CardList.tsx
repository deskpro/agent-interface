import * as React from "react";
import classNames from "classnames";

import "@deskpro/agent-interface-style/dist/components/dp-ListPane.css";

export type CardListProps = {
  className?: string;
  hoverable?: boolean;
  innerRef?: React.Ref<HTMLDivElement>;
  children: React.ReactNode;
};

const CardList: React.FC<CardListProps> = ({
  children,
  className,
  hoverable = false,
  innerRef
}) => (
  <div
    className={classNames("dp-CardList", className, {
      "is-hoverable": hoverable
    })}
    role="list"
    ref={innerRef}
  >
    {children}
  </div>
);

export default React.forwardRef<HTMLDivElement, CardListProps>((props, ref) => (
  <CardList {...props} innerRef={ref} />
));
