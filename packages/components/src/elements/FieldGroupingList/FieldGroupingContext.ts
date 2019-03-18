import { createContext } from "react";

export type FieldGroupingContextType = {
  selected: React.Key[];
  onToggleItem: (itemName: React.Key, e: React.SyntheticEvent) => void;
};
export const FieldGroupingContext = createContext<FieldGroupingContextType>({
  selected: [],
  onToggleItem: () => {}
});
