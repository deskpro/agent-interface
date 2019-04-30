import * as React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import { GuideType } from "./GuideItem";
import Icon from "../elements/Icon/Icon";

export type GuidesBreadcrumbsProps = {
  items: GuideType[];
  homeSlug?: string;
};

const GuidesBreadcrumbs: React.FC<GuidesBreadcrumbsProps> = ({
  items,
  homeSlug
}) => (
  <ul className="dp-Guides-breadcrumbs">
    {homeSlug && (
      <li className="dp-Breadcrumb-item">
        <Link to={homeSlug} className="dp-Breadcrumb-link">
          <Icon name="home" size={12} />
        </Link>
      </li>
    )}
    {items.map(({ id, title, slug }, idx) => (
      <li className="dp-Breadcrumb-item" key={id}>
        <Link
          to={slug}
          className={classNames("dp-Breadcrumb-link", {
            "is-active": items.length - 1 === idx
          })}
        >
          {title}
        </Link>
      </li>
    ))}
  </ul>
);

export default GuidesBreadcrumbs;
