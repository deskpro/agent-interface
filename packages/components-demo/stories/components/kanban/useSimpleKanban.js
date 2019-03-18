import { useReducer, useCallback } from "react";
import produce from "immer";
import inPercy from "@percy-io/in-percy";

const columns = ["Backlog", "Started", "In Progress", "Review", "QA", "Closed"];

let columnsLength = [];
if (inPercy()) {
  columnsLength = [3, 18, 2, 6, 7, 8];
} else {
  for (let i = 0; i < 6; i += 1) {
    columnsLength.push(Math.round(Math.random() * 20));
  }
}

const initCards = () =>
  columns.reduce((acc, column, columnIndex) => {
    acc[column] = Array.from(
      { length: columnsLength[columnIndex] },
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

  const onDragEnd = useCallback(payload => {
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
  }, []);

  return { cards, onDragEnd };
};
