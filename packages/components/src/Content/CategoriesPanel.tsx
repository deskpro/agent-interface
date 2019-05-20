import * as React from "react";
import { NavLink } from "react-router-dom";

import Arrow from "../Button/Arrow";

export interface CategoryType {
  id: React.Key;
  title: string;
  slug: string;
  children: CategoryType[];
}

export type CategoriesPanelProps = {
  items: CategoryType[];
};

const ListItem: React.FC<CategoryType> = ({ title, slug, children }) => {
  const [isExpanded, setState] = React.useState(false);
  return (
    <div className="dp-TicketMenuItem dp-MenuBarItem">
      <span className="dp-TitleMenu">
        <NavLink activeClassName="is-active" to={`/${slug}`}>
          {title}
        </NavLink>
        {!!children.length && (
          <Arrow isActive={isExpanded} onClick={() => setState(!isExpanded)} />
        )}
      </span>
      {!!children.length && isExpanded && (
        <span className="dp-SubMenu">
          <List items={children} />
        </span>
      )}
    </div>
  );
};

const List: React.FC<CategoriesPanelProps> = ({ items }) => (
  <>
    {items.map(item => (
      <ListItem key={item.id} {...item} />
    ))}
  </>
);

const CategoriesPanel: React.FC<CategoriesPanelProps> = ({ items }) => (
  <List items={items} />
);

export default CategoriesPanel;
