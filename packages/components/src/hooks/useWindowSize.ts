import { useState, useEffect, useCallback } from "react";

export type WindowSizeType = {
  width?: number;
  height?: number;
};

export default function useWindowSize() {
  const isClient = typeof window === "object";

  const [windowSize, setWindowSize] = useState<WindowSizeType>({});

  const handleResize = useCallback(() => {
    if (isClient) {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
  }, [isClient]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);
  return windowSize;
}
