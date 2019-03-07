import * as React from "react";
import classNames from "classnames";
import { Manager, Reference, Popper } from "react-popper";

import Icon from "../Icon/Icon";
import { MenuProps } from "./Menu";
import useOutsideClick from "../../hooks/useOutsideClick";
import useMenu from "../../hooks/useMenu";

export type CogProps = {
  renderMenu: (menuProps: Partial<MenuProps>) => React.ReactElement<any>;
  className?: string;
  isVisible?: boolean;
  style?: any;
  placement?: string;
  innerRef?: React.Ref<HTMLSpanElement>;
};

const Cog: React.FC<CogProps> = ({
  className,
  renderMenu,
  isVisible = false,
  style,
  placement,
  innerRef
}) => {
  const { isVisible: menuIsVisible, hideMenu, toggleMenu } = useMenu();

  const cogRef = React.useRef<HTMLSpanElement>(null);
  useOutsideClick(cogRef, hideMenu);

  const [isMouseOver, setIsMouseOver] = React.useState(false);

  if (!isVisible && !menuIsVisible && !isMouseOver) {
    return null;
  }

  return (
    <span
      className={classNames("dp-Cog", className, {
        "is-active": menuIsVisible
      })}
      style={style}
      role="button"
      tabIndex={-1}
      ref={ref => {
        (cogRef.current as HTMLSpanElement | null) = ref;
        if (typeof innerRef === "function") {
          innerRef(ref);
        } else if (innerRef && innerRef.current) {
          // eslint-disable-next-line no-param-reassign
          (innerRef.current as HTMLSpanElement | null) = cogRef.current;
        }
      }}
      data-placement={placement}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => {
        if (!menuIsVisible) {
          setIsMouseOver(false);
        }
      }}
    >
      <Manager>
        <Reference>
          {({ ref }) => (
            <Icon
              name="settings"
              size={12}
              circle
              onClick={toggleMenu}
              ref={ref}
            />
          )}
        </Reference>
        {menuIsVisible && (
          <Popper
            placement="bottom-start"
            modifiers={{
              preventOverflow: {
                enabled: true,
                escapeWithReference: true,
                boundariesElement: "viewport"
              },
              flip: {
                enabled: true,
                flipVariationsByContent: true
              }
            }}
          >
            {({ ref, style: menuStyles }) =>
              renderMenu({
                menuRef: ref,
                style: menuStyles,
                onMenuClose: hideMenu
              })
            }
          </Popper>
        )}
      </Manager>
    </span>
  );
};

export default React.memo(
  React.forwardRef<HTMLSpanElement, CogProps>((props, ref) => (
    <Cog {...props} innerRef={ref} />
  ))
);
