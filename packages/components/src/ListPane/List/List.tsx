import * as React from "react";
import * as isEqual from "lodash/isEqual";

import Card from "../Card";
import { SimpleCardProps } from "../Card/SimpleCard";
import ScrollArea from "../../ScrollArea/ScrollArea";
import { ListItem } from "../types";

import "@deskpro/agent-interface-style/dist/components/dp-ListPane.css";
import Checkbox from "../../inputs/Checkbox/Checkbox";

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
    props: Partial<SimpleCardProps & { key?: React.Key }>
  ) => React.ReactNode;
  getGroupCheckState: (groupId: React.Key) => boolean | "undef";
  onGroupSelectionToggle: (groupId: React.Key) => void;
};

const List: React.FC<ListProps> = ({
  className,
  scrollHeight,
  items,
  selected,
  onSelectToggle,
  renderItem,
  getGroupCheckState,
  onGroupSelectionToggle
}) => (
  <Card.List className={className}>
    <ScrollArea className="dp-List-items" style={{ height: scrollHeight }}>
      {items.map((item, idx) => {
        const group = item.group || { id: "DEFAULT", title: "DEFAULT" };
        const groupCheckState = getGroupCheckState(group.id);
        return [
          group.id !== "DEFAULT" &&
          (idx === 0 || !isEqual(items[idx - 1].group, group)) ? (
            <Card.SectionTitle key={group.id}>
              {group.id !== "DEFAULT" && (
                <Checkbox
                  id={group.title}
                  checked={!!groupCheckState}
                  undef={groupCheckState === "undef"}
                  onChange={() => {
                    onGroupSelectionToggle(group.id);
                  }}
                />
              )}
              {group.title}
            </Card.SectionTitle>
          ) : null,
          renderItem(item, {
            key: item.id,
            cardId: item.id,
            onCheck: onSelectToggle,
            checked: selected.includes(item.id),
            checkable: true
          })
        ];
      })}
    </ScrollArea>
  </Card.List>
);

export default List;
