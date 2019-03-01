import * as React from "react";
import classNames from "classnames";

import OrderingBarItem from "./OrderingBarItem";

import "@deskpro/agent-interface-style/dist/components/dp-Orderingbar.css";

type OrderingBarSubcomponents = {
  Item: typeof OrderingBarItem;
};

export type OrderingBarProps = {
  className?: string;
};

const OrderingBar: React.FC<OrderingBarProps> & OrderingBarSubcomponents = ({
  className,
  children
}) => <div className={classNames("dp-OrderingBar", className)}>{children}</div>;

OrderingBar.Item = OrderingBarItem;

export default OrderingBar;
