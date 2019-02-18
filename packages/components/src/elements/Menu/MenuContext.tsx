import * as React from "react";
import produce from "immer";

type Position = { x: number; y: number };

export type MenuContextType = {
  visibleMenu: string | null;
  position: Position;
  show: (
    e: React.SyntheticEvent,
    args: {
      menuId: string;
      menuType?: "context" | "dropdown" | "cog" | "simple";
    }
  ) => void;
  hide: () => void;
  updatePosition: (position: Position) => void;
};

export const MenuContext = React.createContext<MenuContextType>({
  visibleMenu: null,
  position: { x: 0, y: 0 },
  show: () => {},
  hide: () => {},
  updatePosition: () => {}
});

/* eslint-disable no-param-reassign */
const menuReducer = produce((state: MenuContextType, { type, payload }) => {
  switch (type) {
    case "show": {
      state.visibleMenu = payload.menuId;
      const { e } = payload;
      let pos;

      if (payload.menuType === "context") {
        pos = {
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
      } else if (payload.menuType === "cog") {
        pos = {
          x: 2,
          y: 5
        };
      } else if (payload.menuType === "dropdown") {
        pos = {
          x: e.target.offsetLeft,
          y: e.target.offsetTop + e.target.offsetHeight + 3
        };
      }

      state.position = pos;
      break;
    }

    case "hide":
      state.visibleMenu = null;
      break;

    case "updatePosition":
      state.position = payload;
      break;

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
    hide: () => {
      dispatch({ type: "hide" });
    },
    updatePosition: position => {
      dispatch({ type: "updatePosition", payload: position });
    }
  });

  return <MenuContext.Provider value={state}>{children}</MenuContext.Provider>;
};
