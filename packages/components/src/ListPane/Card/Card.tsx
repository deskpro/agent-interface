import * as React from "react";
import classNames from "classnames";

import CardTitle from "./CardTitle";
import CardSectionTitle from "./CardSectionTitle";
import CardList from "./CardList";
import SimpleCard from "./SimpleCard";
import TicketCard from "./TicketCard";
import TaskCard from "./TaskCard";
import { MenuProps } from "../../elements/Menu/Menu";
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

export interface ICardModel {
  id: string | number;
}

export type CheckableCardProps = {
  checkable?: boolean;
  checked?: boolean;
  onCheck: (e: React.MouseEvent<HTMLInputElement>) => void;
};

export type BasicCardProps = {
  className?: string;
  isHighlighted?: boolean;
  isFocused?: boolean;
  isActive?: boolean;
  isDragging?: boolean;
  title?: string | React.ReactNode;
  onClick?(
    event: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>
  ): void;
  cogMenu?: React.ReactElement<MenuProps>;
};

const Card: React.FC<BasicCardProps> & CardSubComponents = ({
  className,
  children,
  isHighlighted = false,
  isActive = false,
  isFocused = false,
  isDragging = false,
  title,
  cogMenu,
  onClick
}) => (
  <div
    className={classNames("dp-Card dp-Level", className, {
      "is-selected": isHighlighted,
      "is-active": isActive,
      "is-dragging": isDragging,
      "is-keyboard": isFocused
    })}
    role="link"
    tabIndex={-1}
    onClick={onClick}
    onKeyPress={(e: React.KeyboardEvent<HTMLElement>) => {
      if (e.key === "Enter" && onClick) {
        onClick(e);
      }
    }}
  >
    {!!title && <CardTitle title={title} />}
    {children}
    {!!cogMenu && <Cog menu={cogMenu} />}
  </div>
);

Card.Title = CardTitle;
Card.SectionTitle = CardSectionTitle;
Card.List = CardList;
Card.TicketCard = TicketCard;
Card.TaskCard = TaskCard;
Card.Simple = SimpleCard;

export default Card;
