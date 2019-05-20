import React from "react";
import filter from "lodash/filter";
import sortBy from "lodash/sortBy";

import {
  CategoriesPanel,
  FiltersBar,
  useFiltersBar
} from "@deskpro/agent-interface-components";
import demoData from "./article_categories.json";

const getSubItems = parentId =>
  sortBy(filter(demoData.data, ["parent", parentId]), "display_order").map(
    item => ({ ...item, children: getSubItems(item.id) })
  );

const categories = getSubItems(null);

const ContentCategoriesDemo = ({ match }) => {
  const filtersBarProps = useFiltersBar();
  const category = React.useMemo(
    () => demoData.data.find(c => c.slug === match.params.slug),
    [match.params.slug]
  );

  return (
    <div
      style={{
        height: "100%",
        flex: `1 0 ${(filtersBarProps.locked ? 241 : 0) + 437}px`
      }}
    >
      <FiltersBar
        title={category ? category.title : "Select a category"}
        itemsCount={90}
        {...filtersBarProps}
      >
        <FiltersBar.Panel>
          <CategoriesPanel items={categories} />
        </FiltersBar.Panel>
      </FiltersBar>
    </div>
  );
};

export default ContentCategoriesDemo;
