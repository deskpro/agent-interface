import * as React from "react";
import classNames from "classnames";
import { Manager, Reference, Popper } from "react-popper";

import Icon from "../../elements/Icon/Icon";
import { ViewModeType } from "./useFiltersBar";
import FiltersPanel from "./FiltersPanel";

import "@deskpro/agent-interface-style/dist/components/dp-FilterList.css";
import useOutsideClick from "../../hooks/useOutsideClick";

export type FiltersBarSubComponents = {
  Panel: typeof FiltersPanel;
};

export type FiltersBarProps = {
  opened?: boolean;
  locked?: boolean;
  viewMode?: ViewModeType;
  onToggleOpenState: () => void;
  onToggleLock: () => void;
  onModeChange: (nextMode: ViewModeType) => void;
  title: string;
  itemsCount: number;
};

const FiltersBar: React.FC<FiltersBarProps> & FiltersBarSubComponents = ({
  opened = false,
  locked = false,
  viewMode = "list",
  onToggleOpenState,
  onToggleLock,
  onModeChange,
  title,
  itemsCount,
  children
}) => {
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

  const hidePanelOnOutsideClick = React.useCallback(() => {
    if (!locked && opened) {
      onToggleOpenState();
    }
  }, [locked, opened, onToggleOpenState]);
  useOutsideClick(barRef, hidePanelOnOutsideClick);

  return (
    <Manager>
      <div className="dp-Filters" ref={barRef}>
        <div className="dp-Filters-bar dp-Level Level-justify-between">
          <Reference>
            {({ ref }) => (
              <div
                ref={ref}
                className={classNames("dp-Filters-header", {
                  "is-opened": opened,
                  "is-locked": locked
                })}
              >
                <Icon name="menu" size={25} />
                <span className="dp-Filters-title">
                  {title} <span className="dp-qt">({itemsCount})</span>
                </span>
                <Icon
                  name={opened ? "caret-up" : "caret-down"}
                  size={18}
                  color="primary"
                  onClick={onToggleOpenState}
                />
                {opened && (
                  <Icon
                    name="lock"
                    size={18}
                    color="primary"
                    onClick={onToggleLock}
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

        {opened && !locked && (
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
              <FiltersPanel
                ref={ref}
                style={{
                  height: `calc(100vh - ${barRect.top + barRect.height + 5}px)`,
                  ...style
                }}
              >
                {children}
              </FiltersPanel>
            )}
          </Popper>
        )}
      </div>
    </Manager>
  );
};

FiltersBar.Panel = FiltersPanel;

export default FiltersBar;
