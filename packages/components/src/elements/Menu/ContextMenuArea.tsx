import * as React from "react";
import { MenuContext } from "./MenuContext";

export type ContextMenuAreaProps = {
  menuId: string;
  triggerEvent?: "onClick" | "onContextMenu" | "onDoubleClick";
};

const ContextMenuArea: React.FC<ContextMenuAreaProps> = ({
  triggerEvent = "onContextMenu",
  menuId,
  ...props
}) => {
  const context = React.useContext(MenuContext);

  return (
    <div
      style={{ display: "inline-block" }}
      {...{
        [triggerEvent]: (e: React.SyntheticEvent) => {
          e.preventDefault();
          context.show(e, { menuId, menuType: "context" });
        }
      }}
      {...props}
    />
  );
};

export default ContextMenuArea;
