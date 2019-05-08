import * as React from "react";
import classNames from "classnames";

export type CardTitleProps = {
  className?: string;
};

const CardTitle: React.FC<CardTitleProps> = ({ children, className }) => (
  <span className={classNames("dp-Card-title", className)}>{children}</span>
);

export default CardTitle;
