import * as React from "react";
import { Manager, Popper } from "react-popper";

import { MenuProps } from "./Menu";

import useOutsideClick from "../../hooks/useOutsideClick";
import useMenu from "../../hooks/useMenu";

type BoundingRect = {
  top: number;
  bottom: number;
  left: number;
  right: number;
  width: number;
  height: number;
};
interface VirtualReferenceElementType {
  getBoundingClientRect: () => BoundingRect;
  clientWidth: number;
  clientHeight: number;
}

export type ContextMenuProps = {
  triggerEvent?: "onClick" | "onContextMenu" | "onDoubleClick";
  renderMenu: (menuProps: Partial<MenuProps>) => React.ReactElement<any>;
};

const ContextMenu: React.FC<ContextMenuProps> = ({
  triggerEvent = "onContextMenu",
  renderMenu,
  children,
  ...props
}) => {
  const { isVisible: menuIsVisible, hideMenu, showMenu } = useMenu();

  const menuRef = React.useRef<HTMLUListElement>(null);
  useOutsideClick(menuRef, hideMenu);

  const virtualReference = React.useRef<VirtualReferenceElementType>(null);
  const handleContextMenuClick = React.useCallback(e => {
    e.preventDefault();

    const pos = {
      left: e.clientX,
      right: e.clientX,
      top: e.clientY,
      bottom: e.clientY,
      width: 1,
      height: 1
    };

    if (
      e.type === "touchend" &&
      (!pos.left || !pos.top) &&
      (e.changedTouches && e.changedTouches.length > 0)
    ) {
      pos.left = e.changedTouches[0].clientX;
      pos.top = e.changedTouches[0].clientY;
    }

    if (!pos.left || pos.left < 0) {
      pos.left = 0;
    }

    if (!pos.top || pos.top < 0) {
      pos.top = 0;
    }

    pos.right = pos.left + pos.width;
    pos.bottom = pos.top + pos.height;

    (virtualReference.current as VirtualReferenceElementType) = {
      getBoundingClientRect() {
        return pos;
      },
      get clientWidth() {
        return pos.width;
      },
      get clientHeight() {
        return pos.height;
      }
    };

    showMenu();
  }, []);

  return (
    <Manager>
      <span
        className="dp-ContextMenuWrapper"
        style={{ display: "inline-block" }}
        {...{
          [triggerEvent]: handleContextMenuClick
        }}
        {...props}
      >
        {children}
      </span>
      {menuIsVisible && (
        <Popper
          referenceElement={
            virtualReference.current as VirtualReferenceElementType
          }
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
          {({ ref, style }) =>
            renderMenu({
              style,
              menuRef: (el: HTMLUListElement) => {
                ref(el);
                (menuRef.current as HTMLUListElement) = el;
              },
              onMenuClose: hideMenu
            })
          }
        </Popper>
      )}
    </Manager>
  );
};

export default ContextMenu;
