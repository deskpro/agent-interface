import * as React from "react";
import { createPortal } from "react-dom";

const Portal: React.FC = ({ children }) => {
  const container = React.useRef<HTMLElement | null>(null);
  const [canRender, setRenderState] = React.useState(false);

  React.useEffect(() => {
    container.current = document.createElement("div");
    document.body.appendChild(container.current);
    setRenderState(true);

    return () => {
      document.body.removeChild(container.current as Node);
    };
  }, []);

  return canRender && createPortal(children, container.current);
};

export default Portal;
