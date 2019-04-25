import * as React from "react";
import Icon from "../Icon/Icon";

import "@deskpro/agent-interface-style/dist/elements/dp-badges.css";

const AgentIM: React.FC = () => (
  <div>
    <ul className="dp-Agent-IM">
      <li className="dp-MenuBarItem">
        <span className="dp-Badge Badge--round Badge--grey-lighter" />
      </li>
      <li className="dp-MenuBarItem">
        <span className="dp-Badge Badge--round Badge--grey-lighter" />
      </li>
      <li className="dp-MenuBarItem">
        <span className="dp-Badge Badge--round Badge--grey-lighter">1</span>
      </li>
      <li className="dp-MenuBarItem">
        <Icon name="add-im" size={25} />
      </li>
    </ul>
  </div>
);

export default AgentIM;
