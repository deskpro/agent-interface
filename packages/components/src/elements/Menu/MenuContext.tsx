import * as React from "react";
import produce from "immer";

export type MenuContextType = {
  visibleMenu: string | null;
  position: { x: number; y: number };
  show: (
    e: React.SyntheticEvent,
    args: { menuId: string; menuType?: "context" | "dropdown" | "simple" }
  ) => void;
  hide: (menuId: string) => void;
};

export const MenuContext = React.createContext<MenuContextType>({
  visibleMenu: null,
  position: { x: 0, y: 0 },
  show: () => {},
  hide: () => {}
});

/* eslint-disable no-param-reassign */
const menuReducer = produce((state: MenuContextType, { type, payload }) => {
  switch (type) {
    case "show": {
      state.visibleMenu = payload.menuId;
      const { e } = payload;

      const pos = {
        x: e.clientX,
        y: e.clientY
      };

      if (
        e.type === "touchend" &&
        (!pos.x || !pos.y) &&
        (e.changedTouches && e.changedTouches.length > 0)
      ) {
        pos.x = e.changedTouches[0].clientX;
        pos.y = e.changedTouches[0].clientY;
      }

      if (!pos.x || pos.x < 0) {
        pos.x = 0;
      }

      if (!pos.y || pos.y < 0) {
        pos.y = 0;
      }

      state.position = pos;
      break;
    }

    case "hide": {
      if (state.visibleMenu === payload.menuId) {
        state.visibleMenu = null;
      }
      break;
    }

    default:
      break;
  }
});
/* eslint-enable no-param-reassign */

export const ContextMenuProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(menuReducer, {
    visibleMenu: null,
    position: { x: 0, y: 0 },
    show: (e: React.SyntheticEvent, args) => {
      if (e.persist) {
        e.persist();
      }
      dispatch({ type: "show", payload: { e, ...args } });
    },
    hide: menuId => {
      dispatch({ type: "hide", payload: { menuId } });
    }
  });

  return <MenuContext.Provider value={state}>{children}</MenuContext.Provider>;
};
