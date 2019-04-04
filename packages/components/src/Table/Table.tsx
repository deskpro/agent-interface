import * as React from "react";
import {
  actions,
  useTable,
  useColumns,
  useRows,
  // useGroupBy,
  useSortBy,
  useExpanded,
  useFlexLayout,
  useTableState,
  HeaderColumn,
  EnhancedColumn as ReactTableEnhancedColumn
} from "react-table";
import classNames from "classnames";

import { TableView, Header, Cell, Row, HeaderRow } from "./TableComponents";
import useItemSelection from "../ListPane/useItemSelection";
import { ListItem, ListItemGroup } from "../ListPane/types";
import Checkbox from "../inputs/Checkbox/Checkbox";
import Arrow from "../Button/Arrow";

interface EnhancedColumn extends ReactTableEnhancedColumn {
  headerClassName?: string;
}

export type TableProps = {
  data: ListItem[];
  columns: any[];
  defaults?: {
    pageSize?: number;
  };
  hoverable?: boolean;
  expandable?: boolean;
  renderExpandedRow?: (row: ListItem) => React.ReactNode;
  checkable?: boolean;
  onCheckChange?: (selection: React.Key[]) => void;
  onSort?: (sortBy?: { id: string; desc: boolean }) => void;
};

const defaultGroup: ListItemGroup = { id: "DEFAULT", title: "default" };

const Table: React.FC<TableProps> = ({
  hoverable = true,
  expandable = false,
  checkable = false,
  onCheckChange,
  renderExpandedRow,
  defaults = {},
  columns,
  onSort,
  data,
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
      data,
      state: useTableState(defaults, undefined, {
        reducer: (_, newState, type) => {
          if (type === actions.sortByChange && typeof onSort === "function") {
            const [sortBy] = newState.sortBy;
            onSort(sortBy);
          }
          return newState;
        }
      }),
      columns: [expandable && expandColumn, checkable && checkboxColumn]
        .concat(columns)
        .filter(Boolean) as HeaderColumn[],
      manualSorting: typeof onSort === "function",
      disableMultiSort: true
    },
    useColumns,
    useRows,
    useSortBy,
    useExpanded,
    useFlexLayout
  );

  const {
    getTableProps,
    headerGroups: headerRows,
    rows,
    prepareRow
  } = instance;

  const {
    selection,
    toggleItemSelection,
    toggleGroupSelection,
    getGroupCheckState,
    handleSelectAll,
    handleSelectNone
    // handleSelectInverse
  } = useItemSelection(data);
  React.useEffect(() => {
    if (onCheckChange) {
      onCheckChange(selection);
    }
  }, [selection, onCheckChange]);

  const renderRow = (row, index, rowsArr) => {
    if (!row) {
      return null;
    }
    prepareRow(row);

    const group = row.original.group || defaultGroup;
    const prevGroup =
      index !== 0 ? rowsArr[index - 1].original.group || defaultGroup : null;
    const shouldRenderGroupHeader =
      group.id !== defaultGroup.id &&
      (prevGroup === null || prevGroup.id !== group.id);
    const groupCheckState = getGroupCheckState(group.id);

    const rowProps = row.getRowProps();

    const renderedRow = (
      <Row {...rowProps} expanded={row.isExpanded}>
        {row.cells.map(cell => (
          <Cell {...cell.getCellProps({ className: cell.column.className })}>
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

    if (row.isExpanded || shouldRenderGroupHeader) {
      return (
        <React.Fragment key={rowProps.key}>
          {shouldRenderGroupHeader && (
            <Row {...rowProps} key={`group_${group.id}`} grouped>
              {expandable && <Cell {...row.cells[0].getCellProps()} />}
              {checkable && (
                <Cell {...row.cells[expandable ? 1 : 0].getCellProps()}>
                  <Checkbox
                    id={group.id}
                    checked={!!groupCheckState}
                    undef={groupCheckState === "undef"}
                    onChange={() => toggleGroupSelection(group.id)}
                  />
                </Cell>
              )}
              <Cell className="dp-Card-title" style={{ flex: "0 0 auto" }}>
                {group.title}
              </Cell>
            </Row>
          )}
          {renderedRow}
          {row.isExpanded && (
            <Row
              {...rowProps}
              className={classNames(rowProps.className, "dp-Table-description")}
              key={`${rowProps.key}_expanded`}
            >
              {renderExpandedRow
                ? renderExpandedRow(row.original as ListItem)
                : null}
            </Row>
          )}
        </React.Fragment>
      );
    }
    return renderedRow;
  };

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
                  undef={selection.length > 0 && selection.length < rows.length}
                  onChange={() =>
                    selection.length ? handleSelectNone() : handleSelectAll()
                  }
                />
              )}
              {column.render("Header")}
            </Header>
          ))}
        </HeaderRow>
      ))}
      {!!rows && rows.length > 0 ? rows.map(renderRow) : null}
    </TableView>
  );
};

export default Table;
