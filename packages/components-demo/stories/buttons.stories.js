import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button } from "@deskpro/agent-interface-components";

storiesOf("Button", module).add("Buttons", () => (
  <>
    <div className="dp-ButtonContainer">
      <h2>Button Sizes</h2>
      <div className="dp-ButtonGroup">
        <Button onClick={action("small button")} size="small">
          Small
        </Button>
        <Button onClick={action("normal button")}>Normal</Button>
        <Button onClick={action("medium button")} size="medium">
          Medium
        </Button>
        <Button onClick={action("large button")} size="large">
          Large
        </Button>
      </div>
    </div>
    <div className="dp-ButtonContainer">
      <h2>Rounded</h2>
      <div className="dp-ButtonGroup">
        <Button onClick={action("default button")} rounded>
          Default
        </Button>
        <Button onClick={action("primary button")} rounded color="primary">
          Primary
        </Button>
        <Button onClick={action("secondary button")} rounded color="secondary">
          Secondary
        </Button>
        <Button onClick={action("success button")} rounded color="success">
          Success
        </Button>
        <Button onClick={action("info button")} rounded color="info">
          Info
        </Button>
        <Button onClick={action("warning button")} rounded color="warning">
          Warning
        </Button>
        <Button onClick={action("danger button")} rounded color="danger">
          Danger
        </Button>
      </div>
    </div>
    <div className="dp-ButtonContainer">
      <h2>Disabled</h2>
      <div className="dp-ButtonGroup">
        <Button onClick={action("default button")} disabled>
          Default
        </Button>
        <Button onClick={action("primary button")} disabled color="primary">
          Primary
        </Button>
        <Button onClick={action("secondary button")} disabled color="secondary">
          Secondary
        </Button>
        <Button onClick={action("success button")} disabled color="success">
          Success
        </Button>
        <Button onClick={action("info button")} disabled color="info">
          Info
        </Button>
        <Button onClick={action("warning button")} disabled color="warning">
          Warning
        </Button>
        <Button onClick={action("danger button")} disabled color="danger">
          Danger
        </Button>
      </div>
    </div>
  </>
));
