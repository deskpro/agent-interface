import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import SimpleKanban from "./components/SimpleKanban";
import "./styles.css";

storiesOf("Kanban", module).add("Kanban simple", () => (
  <SimpleKanban action={action} />
));
