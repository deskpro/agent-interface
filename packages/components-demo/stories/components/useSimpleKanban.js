import { useReducer, useCallback } from "react";
import produce from "immer";

const columns = ["Backlog", "Started", "In Progress", "Review", "QA", "Closed"];

const initCards = () =>
  columns.reduce((acc, column) => {
    acc[column] = Array.from(
      { length: Math.round(Math.random() * 50) },
      (_, idx) => `${column}-${idx + 1}`
    );
    return acc;
  }, {});

const cardsReducer = produce((cards, { type, payload }) => {
  switch (type) {
    case "move": {
      const [sourceColumn] = payload.source.droppableId.split("-");
      const [destColumn] = payload.destination.droppableId.split("-");
      const [removed] = cards[sourceColumn].splice(payload.source.index, 1);
      cards[destColumn].splice(payload.destination.index, 0, removed);
      break;
    }

    case "reorder": {
      const { droppableId, index: sourceIdx } = payload.source;
      const { index: destIdx } = payload.destination;
      const [sourceColumn] = droppableId.split("-");
      const [removed] = cards[sourceColumn].splice(sourceIdx, 1);
      cards[sourceColumn].splice(destIdx, 0, removed);
      break;
    }

    default:
      break;
  }
});

export default () => {
  const [cards, dispatch] = useReducer(cardsReducer, [], initCards);

  const onDragEnd = useCallback(
    payload => {
      const { source, destination } = payload;

      // dropped outside the list
      if (!destination) {
        return;
      }

      if (source.droppableId === destination.droppableId) {
        dispatch({ type: "reorder", payload });
      } else {
        dispatch({ type: "move", payload });
      }
    },
    [cards]
  );

  return { cards, onDragEnd };
};
