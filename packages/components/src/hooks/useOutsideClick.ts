import { useEffect, useCallback } from "react";

export default function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
  cb: (e: MouseEvent | TouchEvent) => void
) {
  const handler = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        e.preventDefault();
        e.stopPropagation();
        cb(e);
      }
    },
    [ref, cb]
  );

  useEffect(
    () => {
      document.addEventListener("mousedown", handler);
      document.addEventListener("touchstart", handler);

      return () => {
        document.removeEventListener("mousedown", handler);
        document.removeEventListener("touchstart", handler);
      };
    },
    [handler]
  );
}
