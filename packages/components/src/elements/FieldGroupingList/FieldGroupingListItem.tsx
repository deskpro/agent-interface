import * as React from "react";
import classNames from "classnames";
import { Manager, Reference, Popper } from "react-popper";

import { FieldGroupingListItemType } from "./FieldGroupingListItemType";
import { FieldGroupingContext } from "./FieldGroupingContext";
import SubItem from "./FieldGroupingSubItem";
import Badge from "../Badges/Badge";
import useMenu from "../../hooks/useMenu";
import useOutsideClick from "../../hooks/useOutsideClick";

export type FieldGroupingListItemProps = {
  id: React.Key;
  count: number;
  title: string;
  totalNodes?: number;
  selectedNodes?: number;
  isSelected?: boolean;
  children: FieldGroupingListItemType[];
};

const FieldGroupingListItem: React.FC<FieldGroupingListItemProps> = ({
  id,
  count,
  title,
  totalNodes,
  selectedNodes,
  isSelected = false,
  children
}) => {
  const { isVisible: menuIsVisible, toggleMenu, hideMenu } = useMenu();
  const menuRef = React.useRef<HTMLUListElement>(null);
  useOutsideClick(menuRef, hideMenu);

  const { onToggleItem } = React.useContext(FieldGroupingContext);

  const arrow = (
    <Reference>
      {({ ref }) => (
        <span
          className={classNames("dp-Icon dp-Arrow", {
            "is-active": menuIsVisible
          })}
          ref={ref}
          role="button"
          tabIndex={-1}
          onClick={e => {
            e.stopPropagation();
            toggleMenu();
          }}
          onKeyPress={e => {
            if (e.key === "Enter") {
              e.stopPropagation();
              toggleMenu();
            }
          }}
        />
      )}
    </Reference>
  );

  return (
    <Badge
      type="group-filter"
      label={title}
      value={count}
      className={classNames({
        "is-active": isSelected,
        "Badge--extended": children.length > 0
      })}
      onClick={e => {
        e.stopPropagation();
        onToggleItem(id, e);
      }}
    >
      <Manager>
        {!!totalNodes && !!selectedNodes ? (
          <span className="dp-Num-extended">
            <span>
              <span className="dp-Num">{selectedNodes}</span>/{totalNodes}
            </span>
            {arrow}
          </span>
        ) : (
          !!children.length && arrow
        )}
        {!!children.length && menuIsVisible && (
          <Popper
            placement="bottom-start"
            modifiers={{ offset: { offset: "0,12" } }}
          >
            {({ ref, style }) => (
              <ul
                className="dp-Menu"
                style={style}
                ref={(el: HTMLUListElement) => {
                  ref(el);
                  (menuRef.current as HTMLUListElement) = el;
                }}
              >
                {children.map(child => (
                  <SubItem key={child.id} item={child} />
                ))}
              </ul>
            )}
          </Popper>
        )}
      </Manager>
    </Badge>
  );
};

export default FieldGroupingListItem;
