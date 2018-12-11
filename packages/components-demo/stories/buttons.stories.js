import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button, Icon } from "@deskpro/agent-interface-components";

storiesOf("Button", module).add("Buttons", () => (
  <>
    <div className="dp-ButtonContainer">
      <h2>Contained Button</h2>
      <div className="dp-ButtonGroup">
        <Button onClick={action("click")} disabled>
          Contained Button
        </Button>
        <Button onClick={action("click")}>Contained Button</Button>
        <Button onClick={action("click")} disabled size="small">
          Small
        </Button>
        <Button onClick={action("click")} size="small">
          Small
        </Button>
      </div>
    </div>
    <div className="dp-ButtonContainer">
      <h2>Outlined Button</h2>
      <div className="dp-ButtonGroup">
        <Button onClick={action("click")} disabled variant="outlined">
          Outlined Button
        </Button>
        <Button onClick={action("click")} variant="outlined">
          Outlined Button
        </Button>
        <Button
          onClick={action("click")}
          variant="outlined"
          disabled
          size="small"
        >
          Small
        </Button>
        <Button onClick={action("click")} variant="outlined" size="small">
          Small
        </Button>
      </div>
    </div>
    <div className="dp-ButtonContainer">
      <h2>More Button</h2>
      <div className="dp-ButtonGroup">
        <Button onClick={action("click")} variant="more" />
        <Button onClick={action("click")} variant="more" size="small" />
      </div>
    </div>
    <div className="dp-ButtonContainer">
      <h2>Button Actions</h2>
      <div className="dp-ButtonGroup">
        <Button onClick={action("click")} variant="actions">
          <Icon name="transfer" size={16} />
          Actions
        </Button>
      </div>
    </div>
  </>
));
