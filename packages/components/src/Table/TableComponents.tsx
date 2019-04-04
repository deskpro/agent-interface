import * as React from "react";
import classNames from "classnames";

import "@deskpro/agent-interface-style/dist/components/dp-Tableview.css";

export const TableView: React.FC<React.ComponentProps<"div">> = ({
  className,
  ...props
}) => <div className={classNames("dp-Tableview", className)} {...props} />;

export type RowProps = React.ComponentProps<"div"> & {
  even?: boolean;
  expanded?: boolean;
  grouped?: boolean;
};
export const Row: React.FC<RowProps> = ({
  className,
  even = false,
  expanded = false,
  grouped = false,
  ...props
}) => (
  <div
    className={classNames("dp-TableRow", className, {
      "is-even": even,
      "is-selected": expanded,
      "dp-Filter": grouped
    })}
    {...props}
  />
);

export const HeaderRow: React.FC<RowProps> = ({ className, ...props }) => (
  <Row className={classNames("dp-TableControl", className)} {...props} />
);

export const Cell: React.FC<React.ComponentProps<"div">> = props => (
  <div {...props} />
);

export type HeaderProps = React.ComponentProps<"div"> & {
  canSortBy?: boolean;
  sorted?: boolean;
  sortedIndex?: number;
  sortedDesc?: boolean;
  sortByProps?: any;
};

export const Header: React.FC<HeaderProps> = ({
  canSortBy = false,
  sorted = false,
  sortedDesc,
  sortedIndex,
  sortByProps = {},
  children,
  className,
  ...props
}) => (
  <Cell {...props} className={classNames("dp-TableItem", className)}>
    {children}
    {canSortBy && (
      <span
        {...sortByProps}
        className={classNames("dp-Icon dp-arrowGroup", sortByProps.className, {
          "is-asc": sorted && !sortedDesc,
          "is-desc": sorted && sortedDesc
        })}
      />
    )}
  </Cell>
);
