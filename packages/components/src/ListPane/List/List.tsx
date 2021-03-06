import * as React from "react";
import classNames from "classnames";

import Card from "../Card";
import { SimpleCardProps } from "../Card/SimpleCard";
import Checkbox from "../../inputs/Checkbox/Checkbox";
import ScrollArea from "../../ScrollArea/ScrollArea";
import { ListItem, ListItemGroup } from "../types";

import "@deskpro/agent-interface-style/dist/components/dp-ListPane.css";
import ListAddButton from "./AddButton";
import AnimatedCards from "../Card/AnimatedCards";

export interface ListSubComponents {
  AddButton: typeof ListAddButton;
}

export type GroupedListItemType = {
  group: ListItemGroup;
  items: ListItem[];
};

export interface MassActionType {
  name: React.Key;
  label: string;
  icon?: string;
}

export type ListProps = {
  className?: string;
  scrollHeight?: number;
  items: ListItem[];
  selected: React.Key[];
  onSelectToggle: (
    cardId: React.Key,
    e: React.MouseEvent<HTMLInputElement>
  ) => void;
  renderItem: (
    item: ListItem,
    props: Partial<SimpleCardProps>
  ) => React.ReactNode;
  getGroupCheckState: (groupId: React.Key) => boolean | "undef";
  onGroupSelectionToggle: (groupId: React.Key) => void;
};

const List: React.FC<ListProps> & ListSubComponents = ({
  className,
  scrollHeight,
  items,
  selected,
  onSelectToggle,
  renderItem,
  getGroupCheckState,
  onGroupSelectionToggle
}) => {
  const groupedItems = React.useMemo(
    () =>
      items.reduce(
        (acc, { group = { id: "DEFAULT", title: "" }, ...item }) => {
          const lastItem = acc[acc.length - 1] || null;
          if (lastItem && lastItem.group.id === group.id) {
            acc[acc.length - 1].items.push(item);
          } else {
            acc.push({
              group,
              items: [item]
            });
          }
          return acc;
        },
        [] as GroupedListItemType[]
      ),
    [items]
  );

  return (
    <Card.List className={classNames(className)}>
      <ScrollArea className="dp-List-items" style={{ height: scrollHeight }}>
        {groupedItems.map(({ group, items: groupItems }) => {
          const groupCheckState = getGroupCheckState(group.id);
          return (
            <React.Fragment key={group.id}>
              {group.id !== "DEFAULT" && (
                <Card.SectionTitle>
                  <Checkbox
                    id={group.title}
                    checked={!!groupCheckState}
                    undef={groupCheckState === "undef"}
                    onChange={() => {
                      onGroupSelectionToggle(group.id);
                    }}
                  />
                  {group.title}
                </Card.SectionTitle>
              )}
              <AnimatedCards items={groupItems}>
                {item =>
                  renderItem(item as ListItem, {
                    cardId: item.id,
                    onCheck: onSelectToggle,
                    checked: selected.includes(item.id),
                    checkable: true
                  })
                }
              </AnimatedCards>
            </React.Fragment>
          );
        })}
      </ScrollArea>
    </Card.List>
  );
};

List.AddButton = ListAddButton;

export default List;
