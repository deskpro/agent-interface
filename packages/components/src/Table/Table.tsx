import * as React from "react";
import {
  useTable,
  useColumns,
  useRows,
  useGroupBy,
  useFilters,
  useSortBy,
  useExpanded,
  usePagination,
  useFlexLayout,
  useTableState,
  HeaderColumn,
  EnhancedColumn as ReactTableEnhancedColumn
} from "react-table";
import classNames from "classnames";

import { TableView, Header, Cell, Row, HeaderRow } from "./TableComponents";
import Pagination from "../Pagination/Pagination";
import useItemSelection from "../ListPane/useItemSelection";
import { ListItem } from "../ListPane/types";
import Checkbox from "../inputs/Checkbox/Checkbox";
import Arrow from "../Button/Arrow";

export interface TableRow {
  id: React.Key;
}

interface EnhancedColumn extends ReactTableEnhancedColumn {
  headerClassName?: string;
}

export type TableProps = {
  data: TableRow[];
  columns: any[];
  defaults?: {
    pageSize?: number;
  };
  hoverable?: boolean;
  expandable?: boolean;
  renderExpandedRow?: (row: TableRow) => React.ReactNode;
  checkable?: boolean;
  onCheckChange?: (selection: React.Key[]) => void;
};

const Table: React.FC<TableProps> = ({
  hoverable = true,
  expandable = false,
  checkable = false,
  onCheckChange,
  renderExpandedRow,
  defaults = {},
  columns,
  ...props
}) => {
  const expandColumn = {
    Header: "",
    id: "expander",
    width: 20,
    Cell: ""
  };
  const checkboxColumn = {
    Header: "",
    id: "checkbox",
    width: 40,
    Cell: ""
  };
  const instance = useTable(
    {
      ...props,
      state: useTableState(defaults),
      columns: [expandable && expandColumn, checkable && checkboxColumn]
        .concat(columns)
        .filter(Boolean) as HeaderColumn[]
    },
    useColumns,
    useRows,
    useGroupBy,
    useFilters,
    useSortBy,
    useExpanded,
    usePagination,
    useFlexLayout
  );

  const {
    getTableProps,
    headerGroups: headerRows,
    // rows,
    // getRowProps,
    pageOptions,
    page,
    state: [{ pageIndex /* , pageSize, sortBy, groupBy, filters */ }],
    gotoPage,
    prepareRow
    // previousPage,
    // nextPage,
    // setPageSize,
    // canPreviousPage,
    // canNextPage
  } = instance;

  const {
    selection,
    toggleItemSelection,
    // toggleGroupSelection,
    // getGroupCheckState,
    handleSelectAll,
    handleSelectNone
    // handleSelectInverse
  } = useItemSelection(page.map(row => row.original) as ListItem[]);
  React.useEffect(() => {
    if (onCheckChange) {
      onCheckChange(selection);
    }
  }, [selection, onCheckChange]);

  const renderRow = (row, index, style = {}) => {
    if (!row) {
      return (
        <Row {...{ style, even: Boolean(index % 2) }}>
          <Cell>Loading more...</Cell>
        </Row>
      );
    }
    prepareRow(row);
    const rowProps = row.getRowProps({ style, even: Boolean(index % 2) });
    const renderedRow = (
      <Row {...rowProps} expanded={row.isExpanded}>
        {row.cells.map(cell => (
          <Cell {...cell.getCellProps()} className={cell.column.className}>
            {cell.column.id === "expander" && (
              <Arrow
                onClick={() => row.toggleExpanded()}
                isActive={row.isExpanded}
              />
            )}
            {cell.column.id === "checkbox" && (
              <Checkbox
                id={row.original.id}
                checked={selection.includes(row.original.id)}
                onChange={() => toggleItemSelection(row.original.id)}
              />
            )}
            {cell.render("Cell")}
          </Cell>
        ))}
      </Row>
    );

    if (row.isExpanded) {
      return (
        <React.Fragment key={rowProps.key}>
          {renderedRow}
          <Row
            {...rowProps}
            className={classNames(rowProps.className, "dp-Table-description")}
            key={`${rowProps.key}_expanded`}
          >
            {renderExpandedRow
              ? renderExpandedRow(row.original as TableRow)
              : null}
          </Row>
        </React.Fragment>
      );
    }
    return renderedRow;
  };

  const tableBody =
    page && page.length ? page.map((row, i) => renderRow(row, i)) : null;

  return (
    <TableView
      {...getTableProps({
        className: classNames({ "is-hoverable": hoverable })
      })}
    >
      {headerRows.map(headerRow => (
        <HeaderRow {...headerRow.getRowProps()}>
          {headerRow.headers.map((column: EnhancedColumn) => (
            <Header
              {...column.getHeaderProps({
                className: column.headerClassName
              })}
              canSortBy={column.canSortBy}
              sorted={column.sorted}
              sortedDesc={column.sortedDesc}
              sortedIndex={column.sortedIndex}
              sortByProps={column.getSortByToggleProps()}
            >
              {column.id === "checkbox" && (
                <Checkbox
                  id="select_all"
                  checked={selection.length > 0}
                  undef={selection.length > 0 && selection.length < page.length}
                  onChange={() =>
                    selection.length ? handleSelectNone() : handleSelectAll()
                  }
                />
              )}
              {column.render("Header")}
              {/* {column.canFilter ? <div>{column.render("Filter")}</div> : null} */}
            </Header>
          ))}
        </HeaderRow>
      ))}
      {tableBody}
      <Pagination
        currentPage={pageIndex + 1}
        numPages={pageOptions.length}
        onPageChange={nextPage => gotoPage(nextPage - 1)}
        showGotoPage
      />
    </TableView>
  );
};

export default Table;
