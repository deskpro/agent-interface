import * as React from "react";
import classNames from "classnames";

export type CardSectionTitleProps = {
  className?: string;
};

const CardSectionTitle: React.FC<CardSectionTitleProps> = ({
  className,
  children
}) => (
  <div
    className={classNames(
      "dp-Card-SectionTitle dp-SectionCardTitle",
      className
    )}
  >
    {children}
  </div>
);

export default CardSectionTitle;
