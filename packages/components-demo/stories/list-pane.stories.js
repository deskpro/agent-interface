import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, number, boolean } from "@storybook/addon-knobs";

import PaginationDemo from "./components/list-pane/PaginationDemo";
import TicketCardsDemo from "./components/list-pane/TicketCardsDemo";
import SimpleCardsDemo from "./components/list-pane/SimpleCardsDemo";

storiesOf("ListPane", module)
  .addDecorator(withKnobs)
  .add("Simple Cards", () => <SimpleCardsDemo onCheck={action("checkbox")} />)
  .add("Ticket Cards", () => <TicketCardsDemo onCheck={action("checkbox")} />)
  .add("Pagination", () => (
    <PaginationDemo
      numPages={number("Pages count", 75)}
      proximity={number("Proximity", 2)}
      showGotoPage={boolean("Show 'Go to page'", true)}
    />
  ));
