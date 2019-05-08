import * as React from "react";
import classNames from "classnames";

import { GuideCardProps } from "./GuideCard";
import CardList from "../ListPane/Card/CardList";

export interface CardListItemType {
  id: React.Key;
  title: string;
  status: "draft" | "published";
  children?: CardListItemType[];
}

type GuidesListBaseProps = {
  level?: number;
  renderCard: (
    card: CardListItemType,
    cardProps: Partial<GuideCardProps>
  ) => React.ReactNode;
};

export type GuidesCardListItemProps = GuidesListBaseProps & {
  item: CardListItemType;
};
export type GuidesCardListProps = GuidesListBaseProps & {
  items: CardListItemType[];
};

const CardListItem: React.FC<GuidesCardListItemProps> = ({
  item: { children = [], ...item },
  level = 0,
  renderCard
}) => {
  const [isExpanded, setExpandedState] = React.useState(false);
  return (
    <>
      {renderCard(item, {
        expandable: children.length > 0,
        expanded: isExpanded,
        onExpandToggle: () => setExpandedState(!isExpanded)
      })}
      {children.length > 0 && isExpanded && (
        <GuidesCardList
          items={children}
          level={level + 1}
          renderCard={renderCard}
        />
      )}
    </>
  );
};

const GuidesCardList: React.FC<GuidesCardListProps> = ({
  items,
  level = 0,
  ...props
}) => (
  <CardList
    className={classNames({
      "CardList--tree": level === 0,
      "CardList--subLevel": level > 0
    })}
  >
    {items.map(item => (
      <CardListItem key={item.id} item={item} {...props} />
    ))}
  </CardList>
);

export default GuidesCardList;
