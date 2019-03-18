import * as React from "react";
import classNames from "classnames";
import * as intersection from "lodash/intersection";

import { FieldGroupingListItemType } from "./FieldGroupingListItemType";
import { FieldGroupingContext } from "./FieldGroupingContext";
import getChildrenIds from "./childrenIds";
import Badge from "../Badges/Badge";
import Icon from "../Icon/Icon";
import Arrow from "../../Button/Arrow";

const SubItem: React.FC<{ item: FieldGroupingListItemType }> = ({ item }) => {
  const { selected, onToggleItem } = React.useContext(FieldGroupingContext);
  const selectedChildren = intersection(
    getChildrenIds(item.children || []),
    selected
  );
  const [isExpanded, toggleExpanded] = React.useState(
    selected.includes(item.id) || selectedChildren.length > 0
  );

  return (
    <li
      key={item.id}
      className={classNames({
        "dp-Group-list": !!item.children && item.children.length > 0
      })}
    >
      <span className="dp-Group-item">
        <Icon name="subfield" size={12} />
        <Badge
          type="group-filter"
          className={classNames({ "is-active": selected.includes(item.id) })}
          label={item.title}
          value={item.count}
          onClick={e => {
            e.stopPropagation();
            onToggleItem(item.id, e);
          }}
        >
          {!!item.children && item.children.length > 0 && (
            <Arrow
              isActive={isExpanded}
              onClick={e => {
                e.stopPropagation();
                toggleExpanded(!isExpanded);
              }}
            />
          )}
        </Badge>
      </span>
      {!!item.children && item.children.length > 0 && isExpanded && (
        <ul className="dp-Group-sublist">
          {item.children.map(i => (
            <SubItem key={i.id} item={i} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default SubItem;
