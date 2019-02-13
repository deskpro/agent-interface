import * as React from "react";
import classNames from "classnames";

import CardTitle from "./CardTitle";
import CardSectionTitle from "./CardSectionTitle";
import CardList from "./CardList";
import SimpleCard from "./SimpleCard";
import TicketCard from "./TicketCard/TicketCard";
import TaskCard from "./TaskCard";
import Menu, { MenuProps } from "../../elements/Menu/Menu";
import Cog from "../../elements/Cog/Cog";
// import "@deskpro/agent-interface-style/dist/components/dp-ListPane.css";
import "@deskpro/agent-interface-style/dist/components/dp-Level.css";
import "@deskpro/agent-interface-style/dist/components/dp-card.css";

type CardSubComponents = {
  Title: typeof CardTitle;
  SectionTitle: typeof CardSectionTitle;
  List: typeof CardList;
  TicketCard: typeof TicketCard;
  TaskCard: typeof TaskCard;
  Simple: typeof SimpleCard;
};

export type BasicCardProps = {
  cardId: React.Key;
  className?: string;
  isHighlighted?: boolean;
  isFocused?: boolean;
  isActive?: boolean;
  isDragging?: boolean;
  title?: string | React.ReactNode;
  onClick?(
    cardId: React.Key,
    event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
  ): void;
  renderCogMenu?: (menuProps: Partial<MenuProps>) => React.ReactElement<Menu>;
};

const Card: React.FC<BasicCardProps> & CardSubComponents = ({
  className,
  children,
  isHighlighted = false,
  isActive = false,
  isFocused = false,
  isDragging = false,
  title,
  renderCogMenu,
  onClick,
  cardId
}) => {
  const handleCardClick = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => onClick && onClick(cardId, e),
    [cardId]
  );
  const handleCardKeyPress = React.useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.key === "Enter" && onClick) {
        onClick(cardId, e);
      }
    },
    [cardId]
  );

  // calculate position of the cog icon.
  const cardRef = React.useRef<HTMLDivElement>(null);
  const position = React.useMemo(
    () => {
      if (cardRef.current instanceof HTMLDivElement) {
        const {
          top,
          left,
          width,
          height
        } = cardRef.current.getBoundingClientRect();
        return {
          x: left + width,
          y: top + height / 2
        };
      }
      return { x: 0, y: 0 };
    },
    [cardRef.current]
  );

  // track the mouse movement over the card.
  const [isMouseOver, setIsMouseOver] = React.useState(false);

  return (
    <div
      className={classNames("dp-Card dp-Level", className, {
        "is-selected": isHighlighted,
        "is-active": isActive,
        "is-dragging": isDragging,
        "is-keyboard": isFocused
      })}
      ref={cardRef}
      role="link"
      tabIndex={-1}
      onClick={handleCardClick}
      onKeyPress={handleCardKeyPress}
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      {!!title && <CardTitle title={title} />}
      {children}
      {!!renderCogMenu && (
        <Cog
          menuId={cardId.toString()}
          renderMenu={renderCogMenu}
          isVisible={isMouseOver}
          position={position}
        />
      )}
    </div>
  );
};

Card.Title = CardTitle;
Card.SectionTitle = CardSectionTitle;
Card.List = CardList;
Card.TicketCard = TicketCard;
Card.TaskCard = TaskCard;
Card.Simple = SimpleCard;

export default Card;
