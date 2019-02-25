import * as React from "react";
import classNames from "classnames";
import { Manager, Reference, Popper } from "react-popper";

import CardTitle from "./CardTitle";
import CardSectionTitle from "./CardSectionTitle";
import CardList from "./CardList";
import SimpleCard from "./SimpleCard";
import TicketCard from "./TicketCard/TicketCard";
import TaskCard from "./TaskCard";
import { MenuProps } from "../../elements/Menu/Menu";
import Cog from "../../elements/Menu/CogMenu";
import Portal from "../../common/Portal/Portal";
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
  renderCogMenu?: (menuProps: Partial<MenuProps>) => React.ReactElement<any>;
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

  // track the mouse movement over the card.
  const [isMouseOver, setIsMouseOver] = React.useState(false);

  return (
    <Manager>
      <Reference>
        {({ ref }) => (
          <div
            className={classNames("dp-Card dp-Level", className, {
              "is-selected": isHighlighted,
              "is-active": isActive,
              "is-dragging": isDragging,
              "is-keyboard": isFocused
            })}
            ref={ref}
            role="link"
            tabIndex={-1}
            onClick={handleCardClick}
            onKeyPress={handleCardKeyPress}
            onMouseEnter={() => setIsMouseOver(true)}
            onMouseLeave={() => setIsMouseOver(false)}
          >
            {!!title && <CardTitle title={title} />}
            {children}
          </div>
        )}
      </Reference>
      {!!renderCogMenu && (
        <Portal>
          <Popper
            placement="right"
            modifiers={{
              offset: { offset: "0,-9" },
              flip: { enabled: false },
              preventOverflow: {
                enabled: false,
                padding: 0
              }
            }}
          >
            {({ ref, style, placement }) => (
              <Cog
                renderMenu={renderCogMenu}
                isVisible={isMouseOver}
                ref={ref}
                style={style}
                placement={placement}
              />
            )}
          </Popper>
        </Portal>
      )}
    </Manager>
  );
};

Card.Title = CardTitle;
Card.SectionTitle = CardSectionTitle;
Card.List = CardList;
Card.TicketCard = TicketCard;
Card.TaskCard = TaskCard;
Card.Simple = SimpleCard;

export default Card;
