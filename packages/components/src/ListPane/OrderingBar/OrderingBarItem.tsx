import * as React from "react";
import classNames from "classnames";

export type OrderingBarItemProps = {
  className?: string;
};

const OrderingBarItem: React.FC<OrderingBarItemProps> = ({
  className,
  children
}) => (
  <div className={classNames("dp-OrderingBar-item", className)}>{children}</div>
);

export default OrderingBarItem;
