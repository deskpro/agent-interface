import * as React from "react";
import classNames from "classnames";

export type CardTitleProps = {
  title: string | React.ReactNode;
  className?: string;
};

const CardTitle: React.FC<CardTitleProps> = ({ title, className }) => (
  <span className={classNames("dp-Card-title", className)}>{title}</span>
);

export default CardTitle;
