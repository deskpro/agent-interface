import { useState, useCallback } from "react";

export type UseMenuReturnType = {
  isVisible: boolean;
  showMenu: () => void;
  hideMenu: () => void;
  toggleMenu: () => void;
};

export default function useMenu(): UseMenuReturnType {
  const [isVisible, setState] = useState(false);

  const showMenu = useCallback(() => setState(true), []);
  const hideMenu = useCallback(() => setState(false), []);
  const toggleMenu = useCallback(() => setState(!isVisible), [isVisible]);

  return { isVisible, showMenu, hideMenu, toggleMenu };
}
