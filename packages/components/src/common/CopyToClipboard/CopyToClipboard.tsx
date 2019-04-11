import * as React from "react";
import { useClipboard } from "use-clipboard-copy";
import Icon from "../../elements/Icon/Icon";

export type CopyToClipboardProps = {
  value: string | number;
};

const CopyToClipboard = ({ value }) => {
  const clipboard = useClipboard();
  const handleCopyClipboard = React.useCallback(() => {
    clipboard.copy(value);
  }, [clipboard, value]);

  return (
    <Icon
      name="copy"
      size={17}
      onClick={handleCopyClipboard}
      color={clipboard.copied ? "primary" : undefined}
    />
  );
};

export default CopyToClipboard;
