import * as React from "react";

export type MenuContextType = {
  activeTrail: string;
  setActiveTrail: (activeTrail: string) => void;
  onMenuClose?: () => void;
};

export const MenuContext = React.createContext<MenuContextType>({
  activeTrail: "",
  setActiveTrail: () => []
});

export type MenuContextProviderProps = {
  onMenuClose?: () => void;
};

export const MenuContextProvider: React.FC<MenuContextProviderProps> = ({
  onMenuClose,
  children
}) => {
  const [activeTrail, setActiveTrail] = React.useState("");
  const handleMenuClose = React.useCallback(() => {
    setActiveTrail("");
    if (typeof onMenuClose === "function") {
      onMenuClose();
    }
  }, [setActiveTrail, onMenuClose]);
  return (
    <MenuContext.Provider
      value={{ activeTrail, setActiveTrail, onMenuClose: handleMenuClose }}
    >
      {children}
    </MenuContext.Provider>
  );
};
