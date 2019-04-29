import * as React from "react";
import classNames from "classnames";

import { GuideType } from "./GuideItem";
import Icon from "../elements/Icon/Icon";

export type GuidesBreadcrumbsProps = {
  items: GuideType[];
  alwaysShowHome?: boolean;
  onItemClick: (itemId: React.Key) => void;
};

const GuidesBreadcrumbs: React.FC<GuidesBreadcrumbsProps> = ({
  items,
  alwaysShowHome = false,
  onItemClick
}) => (
  <ul className="dp-Guides-breadcrumbs">
    {(alwaysShowHome || items.length > 0) && (
      <li className="dp-Breadcrumb-item">
        <Icon name="home" size={12} onClick={() => onItemClick("home")} />
      </li>
    )}
    {items.map(({ id, title }, idx) => (
      <li className="dp-Breadcrumb-item" key={id}>
        <button
          type="button"
          className={classNames("dp-Breadcrumb-link", {
            "is-active": items.length - 1 === idx
          })}
          onClick={e => {
            e.preventDefault();
            onItemClick(id);
          }}
        >
          {title}
        </button>
      </li>
    ))}
  </ul>
);

export default GuidesBreadcrumbs;
