import * as React from "react";
import classNames from "classnames";
import { Manager, Reference, Popper } from "react-popper";

import Icon from "../Icon/Icon";
import { MenuContext } from "./MenuContext";

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
  const clickHandler = React.useCallback(
    e => {
      if (typeof onClick === "function") {
        onClick(name, e);
      }
    },
    [name, onClick]
  );
  const activateMenuItem = React.useCallback(
    () => {
      setActiveTrail(trail);
    },
    [trail, setActiveTrail]
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
        "is-checked": isChecked
      })}
      {...itemProps}
      role="menuitem"
      onClick={clickHandler}
      onKeyPress={clickHandler}
      onMouseOver={activateMenuItem}
      onFocus={activateMenuItem}
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
              {!!children && <span className="dp-Arrow" />}
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
