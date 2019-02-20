import * as React from "react";
import Card from "../Card";
import Checkbox from "../../inputs/Checkbox/Checkbox";
import SimpleCard, { SimpleCardProps } from "../Card/SimpleCard";
import Pagination from "../../Pagination/Pagination";
import ActionsButton from "../../Button/ActionsButton";
import { Menu } from "../..";

export interface ListItem {
  id: React.Key;
  title: string;
}

export interface MassActionType {
  name: React.Key;
  label: string;
  icon?: string;
}

export type ListProps = {
  items: ListItem[];
  selected: React.Key[];
  onSelectToggle: (
    cardId: React.Key,
    e: React.MouseEvent<HTMLInputElement>
  ) => void;
  onSelectAll: () => void;
  onSelectNone: () => void;
  onSelectInverse: () => void;
  massActions?: MassActionType[];
  onMassAction?: (actionName: React.Key) => void;
  currentPage?: number;
  numPages: number;
  onPageChange: (page: number) => void;
  as: React.ComponentType<SimpleCardProps>;
};

const List: React.FC<ListProps> = ({
  items,
  selected,
  onSelectToggle,
  onSelectAll,
  onSelectNone,
  // onSelectInverse,
  massActions = [],
  onMassAction,
  currentPage = 1,
  numPages,
  onPageChange,
  as = SimpleCard
}) => (
  <>
    <Card.List>
      <Card.SectionTitle>
        <Checkbox
          onChange={selected.length ? onSelectNone : onSelectAll}
          checked={selected.length > 0}
          undef={selected.length > 0 && selected.length < items.length}
        />
        <span>{!!selected.length && `(${selected.length} selected)`}</span>
      </Card.SectionTitle>
      {items.map(({ id, ...props }) =>
        React.createElement(as, {
          key: id,
          cardId: id,
          ...props,
          onCheck: onSelectToggle,
          checked: selected.includes(id),
          checkable: true
        })
      )}
    </Card.List>
    <Pagination
      currentPage={currentPage}
      numPages={numPages}
      onPageChange={onPageChange}
    />
    {selected.length > 0 && massActions.length > 0 && (
      <ActionsButton
        renderMenu={menuProps => (
          <Menu {...menuProps}>
            {massActions.map(({ name, label }) => (
              <Menu.MenuItem
                key={name}
                text={label}
                onClick={() => {
                  if (onMassAction) {
                    onMassAction(name);
                  }
                }}
              />
            ))}
          </Menu>
        )}
      >
        Perform mass action
      </ActionsButton>
    )}
  </>
);

export default List;
