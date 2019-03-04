import * as React from "react";

import Card from "../Card";
import { SimpleCardProps } from "../Card/SimpleCard";
import ScrollArea from "../../ScrollArea/ScrollArea";

import "@deskpro/agent-interface-style/dist/components/dp-ListPane.css";

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
};

const List: React.FC<ListProps> = ({
  className,
  scrollHeight,
  items,
  selected,
  onSelectToggle,
  renderItem
}) => (
  <Card.List className={className}>
    <ScrollArea className="dp-List-items" style={{ height: scrollHeight }}>
      {items.map(item =>
        renderItem(item, {
          key: item.id,
          cardId: item.id,
          onCheck: onSelectToggle,
          checked: selected.includes(item.id),
          checkable: true
        })
      )}
    </ScrollArea>
  </Card.List>
);

export default List;
