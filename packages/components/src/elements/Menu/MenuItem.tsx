import * as React from "react";
import classNames from "classnames";
import { Manager, Reference, Popper } from "react-popper";

import Icon from "../Icon/Icon";
import { MenuContext } from "./Menu";

export type MenuItemProps = {
  icon?: string | React.ReactElement<any>;
  text: string;
  link?: string;
  onClick?(e: React.SyntheticEvent<HTMLElement>): void;
  className?: string;
  linkComponent?: any;
};

const MenuItem: React.FC<MenuItemProps> = ({
  text,
  icon,
  link,
  onClick,
  className,
  children,
  linkComponent = "a",
  ...itemProps
}) => {
  const { onMenuClose } = React.useContext(MenuContext);
  const clickHandler = React.useCallback(
    e => {
      if (link || onClick) {
        if (typeof onClick === "function") {
          onClick(e);
        }
        if (typeof onMenuClose === "function") {
          onMenuClose();
        }
      }
    },
    [link, onClick]
  );

  const [isSubmenuVisible, setSubmenuVisibility] = React.useState<boolean>(
    false
  );

  const labelProps = {
    className: "dp-Menu-link"
  };
  if (link) {
    labelProps[linkComponent === "a" ? "href" : "to"] = link;
  }

  return (
    <li
      className={classNames("dp-Menu-linkItem", className)}
      {...itemProps}
      role="menuitem"
      onClick={clickHandler}
      onKeyPress={clickHandler}
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
              {!!children && (
                <span
                  className={classNames("dp-Arrow", {
                    "is-active": isSubmenuVisible
                  })}
                  role="button"
                  tabIndex={-1}
                  onClick={e => {
                    e.stopPropagation();
                    setSubmenuVisibility(!isSubmenuVisible);
                  }}
                  onKeyDown={() => {}}
                />
              )}
            </span>
          )}
        </Reference>
        {!!children && isSubmenuVisible && (
          <Popper
            placement="right-start"
            positionFixed={false}
            modifiers={{
              offset: { enabled: true, offset: "0,11" },
              flip: {
                enabled: true,
                behavior: ["right", "left"],
                padding: 0
              },
              preventOverflow: {
                enabled: true,
                boundariesElement: "viewport"
              }
            }}
          >
            {({ ref, style }) =>
              React.cloneElement(
                React.Children.only(children) as React.ReactElement<any>,
                { menuRef: ref, style }
              )
            }
          </Popper>
        )}
      </Manager>
    </li>
  );
};

export default MenuItem;
