import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean } from "@storybook/addon-knobs";

import SimpleKanban from "./components/kanban/SimpleKanban";
import CardKanban from "./components/kanban/CardKanban";
import StandardKanban from "./components/kanban/StandardKanbanDemo";
import "../styles/kanban.css";

storiesOf("Kanban", module)
  .addDecorator(withKnobs)
  .add("Simple Kanban", () => <SimpleKanban action={action} />)
  .add("Tickets Kanban", () => <CardKanban action={action} />)
  .add("Standard Kanban", () => (
    <StandardKanban
      action={action}
      allowReorder={boolean("Allow Reorder", true)}
    />
  ));
