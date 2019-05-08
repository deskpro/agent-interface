import * as React from "react";
import classNames from "classnames";

import GuideItem, { GuideType } from "./GuideItem";
import GuidesBreadcrumbs from "./GuidesBreadcrumbs";
import CardList from "./CardList";
import GuideCard from "./GuideCard";

import "@deskpro/agent-interface-style/dist/components/dp-Guides.css";

type GuidesSubComponents = {
  Breadcrumbs: typeof GuidesBreadcrumbs;
  ArticlesTree: typeof CardList;
  Card: typeof GuideCard;
};

export type GuidesProps = {
  kind: "guides" | "sections";
  reorderable?: boolean;
  items: GuideType[];
  onSettingsClick: (guideId: React.Key) => void;
  onReorder: (itemId: React.Key, newPosition: number) => void;
};

const Guides: React.FC<GuidesProps> & GuidesSubComponents = ({
  kind = "guides",
  reorderable = false,
  items,
  onSettingsClick
  // onReorder
}) => {
  const dragHandleProps = {
    role: "draghandle",
    style: { cursor: "handle" }
  };

  return (
    <>
      <div className="dp-Guides-list is-hoverable">
        {items.map(({ id, ...item }) => (
          <GuideItem
            key={id}
            id={id}
            {...item}
            className={classNames({ "Guide--section": kind === "sections" })}
            onSettingsClick={onSettingsClick}
            dragHandleProps={reorderable ? dragHandleProps : undefined}
          />
        ))}
      </div>
    </>
  );
};

Guides.Breadcrumbs = GuidesBreadcrumbs;
Guides.ArticlesTree = CardList;
Guides.Card = GuideCard;

export default Guides;
