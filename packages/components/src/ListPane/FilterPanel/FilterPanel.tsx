import * as React from "react";
import classNames from "classnames";
import { Manager, Reference, Popper } from "react-popper";

import Icon from "../../elements/Icon/Icon";

export type ViewModeType = "list" | "table" | "kanban";
export type FilterPanelProps = {
  viewMode?: ViewModeType;
  onModeChange: (nextMode: ViewModeType) => void;
  title: string;
  itemsCount: number;
};

const FilterPanel: React.FC<FilterPanelProps> = ({
  viewMode = "list",
  onModeChange,
  title,
  itemsCount,
  children
}) => {
  const [isOpened, setOpened] = React.useState<boolean>(false);
  const [isLocked, setLocked] = React.useState<boolean>(false);

  const [barRect, setBarRect] = React.useState<ClientRect>({
    left: 0,
    bottom: 0,
    top: 0,
    right: 0,
    height: 0,
    width: 0
  });
  const barRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    if (barRef.current) {
      setBarRect(barRef.current.getBoundingClientRect());
    }
  }, [barRef, setBarRect]);

  return (
    <Manager>
      <div className="dp-Filters">
        <div
          ref={barRef}
          className="dp-Filters-bar dp-Level Level-justify-between"
        >
          <Reference>
            {({ ref }) => (
              <div
                ref={ref}
                className={classNames("dp-Filters-header", {
                  "is-opened": isOpened,
                  "is-locked": isLocked
                })}
                style={{ width: 240 }}
              >
                <Icon name="menu" size={25} />
                <span className="dp-Filters-title">
                  {title} <span className="dp-qt">({itemsCount})</span>
                </span>
                <Icon
                  name={isOpened ? "caret-up" : "caret-down"}
                  size={18}
                  color="primary"
                  onClick={() => setOpened(!isOpened)}
                />
                {isOpened && (
                  <Icon
                    name="lock"
                    size={18}
                    color="primary"
                    onClick={() => setLocked(!isLocked)}
                  />
                )}
              </div>
            )}
          </Reference>

          <ul className="dp-ViewModes">
            <li
              className={classNames("dp-ViewModes-item", {
                "is-active": viewMode === "list"
              })}
            >
              <Icon
                name="list-view"
                size={18}
                onClick={() => onModeChange("list")}
              />
            </li>
            <li
              className={classNames("dp-ViewModes-item", {
                "is-active": viewMode === "table"
              })}
            >
              <Icon
                name="table-view"
                size={18}
                onClick={() => onModeChange("table")}
              />
            </li>
            <li
              className={classNames("dp-ViewModes-item", {
                "is-active": viewMode === "kanban"
              })}
            >
              <Icon
                name="kanban-view"
                size={18}
                onClick={() => onModeChange("kanban")}
              />
            </li>
          </ul>
        </div>

        {isOpened && (
          <Popper
            placement="bottom-start"
            modifiers={{
              preventOverflow: {
                enabled: true,
                escapeWithReference: true,
                boundariesElement: "viewport"
              }
            }}
          >
            {({ ref, style }) => (
              <div
                ref={ref}
                className="dp-Filters-panel"
                style={{
                  height: `calc(100vh - ${barRect.top + barRect.height + 5}px)`,
                  width: 240,
                  backgroundColor: "#fff",
                  boxShadow: "10px 0 5px 0 grey",
                  zIndex: 1,
                  ...style
                }}
              >
                {children}
              </div>
            )}
          </Popper>
        )}
      </div>
    </Manager>
  );
};

export default FilterPanel;
