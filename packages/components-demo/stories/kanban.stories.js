import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import SimpleKanban from "./components/SimpleKanban";
import CardKanban from "./components/CardKanban";
import StandardKanban from "./components/StandardKanbanDemo";
import "./styles.css";

storiesOf("Kanban", module)
  .add("Simple Kanban", () => <SimpleKanban action={action} />)
  .add("Tickets Kanban", () => <CardKanban action={action} />)
  .add("Standard Kanban", () => <StandardKanban action={action} />);