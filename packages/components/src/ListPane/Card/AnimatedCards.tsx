import * as React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export interface AnimatedItem {
  id: React.Key;
}

export type AnimatedCardsProps = {
  items: AnimatedItem[];
  children: (item: AnimatedItem, index: number) => React.ReactNode;
};

const AnimatedCards: React.FC<AnimatedCardsProps> = ({ items, children }) => (
  <TransitionGroup component={null}>
    {items.map((item, index) => (
      <CSSTransition
        classNames={{
          enter: "dp-Entering",
          enterActive: "dp-Entering-active",
          enterDone: "dp-Entering-done",
          exit: "dp-Leaving",
          exitActive: "dp-Leaving-active",
          exitDone: "dp-Leaving-done"
        }}
        timeout={500}
        appear={false}
        key={item.id}
      >
        {children(item, index)}
      </CSSTransition>
    ))}
  </TransitionGroup>
);

export default AnimatedCards;
