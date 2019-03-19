import * as React from "react";
import classNames from "classnames";
import { Manager, Reference, Popper } from "react-popper";

import Icon from "../Icon/Icon";
import { MenuContext } from "./MenuContext";
import usePrevious from "../../hooks/usePrevious";
import Arrow from "../../Button/Arrow";

export type MenuItemProps = {
  icon?: string | React.ReactElement<any>;
  name: React.Key;
  text: string;
  link?: string;
  onClick?: (itemName: React.Key, e: React.SyntheticEvent<HTMLElement>) => void;
  isChecked?: boolean;
  className?: string;
  linkComponent?: any;
  trail?: string;
};

const MenuItem: React.FC<MenuItemProps> = ({
  text,
  name,
  icon,
  link,
  onClick,
  className,
  children,
  isChecked = false,
  linkComponent = "a",
  trail = "",
  ...itemProps
}) => {
  const { activeTrail, setActiveTrail } = React.useContext(MenuContext);
  const liRef = React.useRef<HTMLLIElement>(null);

  // menu item click handler.
  const clickHandler = React.useCallback(
    e => {
      if (typeof onClick === "function") {
        onClick(name, e);
      }
    },
    [name, onClick]
  );

  const { activateMenuItem, hideMenuItem } = useMenuItemHover(
    trail,
    activeTrail,
    setActiveTrail,
    liRef
  );

  const labelProps = {
    className: "dp-Menu-link"
  };
  if (link) {
    labelProps[linkComponent === "a" ? "href" : "to"] = link;
  }

  return (
    <li
      className={classNames("dp-Menu-linkItem", className, {
        "is-checked": isChecked,
        "is-active": activeTrail.startsWith(trail)
      })}
      {...itemProps}
      ref={liRef}
      role="menuitem"
      onClick={clickHandler}
      onKeyPress={(e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
          clickHandler(e);
        }
      }}
      onMouseOver={activateMenuItem}
      onMouseOut={hideMenuItem}
      onFocus={activateMenuItem}
      onBlur={hideMenuItem}
    >
      <Manager>
        <Reference>
          {({ ref }) => (
            <span ref={ref} style={{ display: "inline-block", width: "100%" }}>
              {!!icon && typeof icon === "string" && (
                <Icon name={icon} size={13} />
              )}
              {!!icon && typeof icon !== "string" && icon}
              {React.createElement(
                link ? linkComponent : "span",
                labelProps,
                text
              )}
              {!!children && <Arrow />}
            </span>
          )}
        </Reference>
        {!!children && activeTrail.startsWith(trail) && (
          <Popper
            placement="right-start"
            modifiers={{
              // offset: { enabled: true, offset: "0,11" },
              flip: {
                enabled: true,
                behavior: ["right", "left"],
                padding: 0,
                flipVariationsByContent: true
              },
              preventOverflow: {
                enabled: true,
                escapeWithReference: true,
                boundariesElement: "viewport"
              }
            }}
          >
            {({ ref, style, placement }) =>
              React.cloneElement(
                React.Children.only(children) as React.ReactElement<any>,
                {
                  menuRef: ref,
                  style,
                  className: `is-${placement}`,
                  parentTrail: trail
                }
              )
            }
          </Popper>
        )}
      </Manager>
    </li>
  );
};

export default React.memo<React.FC<MenuItemProps>>(MenuItem);

/**
 * Custom hook to track menu item active state.
 *
 * Provides mouseOver and mouseOut event callbacks to track menu link active status.
 *
 * @param {string} trail Trail of the current menu item.
 * @param {string} activeTrail Current active trail of the menu.
 * @param {Function} setActiveTrail Callback to active a menu item.
 * @param {React.Ref<HTMLLIElement} liRef Ref object for the current menu item LI element.
 */
function useMenuItemHover(
  trail: string,
  activeTrail: string,
  setActiveTrail: (activeTrail: string) => void,
  liRef: React.RefObject<HTMLLIElement>
) {
  // activate menu item on mouse over.
  const activateMenuItem = React.useCallback(
    e => {
      e.stopPropagation();
      if (trail !== activeTrail) {
        setActiveTrail(trail);
      }
    },
    [trail, activeTrail, setActiveTrail]
  );

  // timer to close menu item on mouse out.
  const mouseOutTimer = React.useRef<NodeJS.Timeout>(null);

  // mouse out callback
  const hideMenuItem = React.useCallback(
    e => {
      // clear previous timer.
      if (mouseOutTimer.current) {
        clearTimeout(mouseOutTimer.current);
      }
      // check if the event target is not a child of the current menu item
      if (
        liRef.current instanceof HTMLLIElement &&
        !liRef.current.contains(e.relatedTarget)
      ) {
        // create timer to close the current submenu and activate parent lint item.
        const parentTrail = trail
          .split(".")
          .slice(0, -1)
          .join(".");
        (mouseOutTimer.current as NodeJS.Timeout) = setTimeout(
          () => setActiveTrail(parentTrail),
          300
        );
      }
    },
    [liRef, trail, setActiveTrail]
  );

  // track the active trail changes to reset timer only when it changes.
  const prevActiveTrail = usePrevious(activeTrail);
  React.useEffect(() => {
    // reset mouse out timer only in case the active trail changed.
    if (activeTrail !== prevActiveTrail && mouseOutTimer.current) {
      clearTimeout(mouseOutTimer.current as NodeJS.Timeout);
    }
  }, [activeTrail, prevActiveTrail, mouseOutTimer]);

  return { activateMenuItem, hideMenuItem };
}
