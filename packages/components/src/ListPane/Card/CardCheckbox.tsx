import * as React from "react";

import Checkbox from "../../inputs/Checkbox/Checkbox";

export type CheckableCardProps = {
  cardId: React.Key;
  checkable?: boolean;
  checked?: boolean;
  onCheck: (cardId: React.Key, e: React.MouseEvent<HTMLInputElement>) => void;
};

const CardCheckbox: React.FC<CheckableCardProps> = ({
  cardId,
  checkable,
  checked,
  onCheck
}) => {
  const handleCheck = React.useCallback(
    (e: React.PointerEvent<HTMLInputElement>) => onCheck(cardId, e),
    [cardId, onCheck]
  );

  if (!checkable) {
    return null;
  }

  return (
    <Checkbox
      id={cardId.toString()}
      value={cardId}
      checked={checked}
      onChange={handleCheck}
    />
  );
};

export default CardCheckbox;
