import { useState, useCallback } from "react";

export type ViewModeType = "list" | "table" | "kanban";

export default () => {
  const [opened, setOpened] = useState<boolean>(false);
  const [locked, setLocked] = useState<boolean>(false);
  const [viewMode, onModeChange] = useState<ViewModeType>("list");

  const onToggleOpenState = useCallback(() => {
    if (opened && locked) {
      setLocked(false);
    }

    setOpened(!opened);
  }, [locked, opened]);

  const onToggleLock = useCallback(() => {
    setLocked(!locked);
  }, [locked, setLocked]);

  return {
    opened,
    onToggleOpenState,
    locked,
    onToggleLock,
    viewMode,
    onModeChange
  };
};
