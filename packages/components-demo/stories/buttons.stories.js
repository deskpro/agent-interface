import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button } from "@deskpro/agent-interface-components";

storiesOf("Button", module).add("Buttons", () => (
  <>
    <div className="dp-ButtonContainer">
      <h2>Button</h2>
      <div className="dp-ButtonGroup">
        <Button onClick={action("click")} disabled size="large">
          Button
        </Button>
        <Button onClick={action("click")} size="large">
          Button
        </Button>
        <Button onClick={action("click")} disabled size="small">
          Button
        </Button>
        <Button onClick={action("click")} size="small">
          Button
        </Button>
      </div>
    </div>
    <div className="dp-ButtonContainer">
      <h2>Button Actions</h2>
      <div className="dp-ButtonGroup">
        <Button onClick={action("click")} isActions>
          Button
        </Button>
      </div>
    </div>
  </>
));
