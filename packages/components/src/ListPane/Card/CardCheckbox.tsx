import * as React from "react";

import Checkbox from "../../inputs/Checkbox/Checkbox";

export type CheckableCardProps = {
  cardId: React.Key;
  className?: string;
  checkable?: boolean;
  checked?: boolean;
  onCheck?: (cardId: React.Key, e: React.MouseEvent<HTMLInputElement>) => void;
};

const CardCheckbox: React.FC<CheckableCardProps> = ({
  cardId,
  className,
  checkable,
  checked,
  onCheck
}) => {
  const handleCheck = React.useCallback(
    (e: React.PointerEvent<HTMLInputElement>) => onCheck && onCheck(cardId, e),
    [cardId, onCheck]
  );

  if (!checkable) {
    return null;
  }

  return (
    <Checkbox
      id={cardId.toString()}
      wrapperClassName={className}
      value={cardId}
      checked={checked}
      onChange={handleCheck}
    />
  );
};

export default CardCheckbox;
