import * as React from "react";
import classNames from "classnames";

import CardTitle from "./CardTitle";
import CardSectionTitle from "./CardSectionTitle";
import CardList from "./CardList";
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
};

export interface ICardModel {
  id: string | number;
}

export type CheckableCardProps = {
  checkable?: boolean;
  checked?: boolean;
  onCheck: (e: React.MouseEvent<HTMLInputElement>) => void;
};

export type CardProps<M> = {
  model: M;
  className?: string;
  isSelected: boolean;
  isActive?: boolean;
  isDragging?: boolean;
  title?: string | React.ReactNode;
  onClick?(event: React.MouseEvent<HTMLElement>): void;
  cogMenu?: React.ReactElement<MenuProps>;
  renderBody?(model: M): React.ReactNode;
};

const Card: React.FC<CardProps<ICardModel>> & CardSubComponents = ({
  model,
  className,
  children,
  isSelected = false,
  isActive = false,
  isDragging = false,
  title,
  cogMenu,
  renderBody
  // onClick
}) => (
  <div
    className={classNames("dp-Card dp-Level", className, {
      "is-selected": isSelected,
      "is-active": isActive,
      "is-dragging": isDragging
    })}
  >
    {!!title && <CardTitle title={title} />}
    {!!renderBody && renderBody(model)}
    {children}
    {!!cogMenu && <Cog menu={cogMenu} />}
  </div>
);

Card.Title = CardTitle;
Card.SectionTitle = CardSectionTitle;
Card.List = CardList;
Card.TicketCard = TicketCard;
Card.TaskCard = TaskCard;

export default Card;
