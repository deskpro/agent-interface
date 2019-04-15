import * as React from "react";
import Icon from "../Icon/Icon";
import Arrow from "../../Button/Arrow";

const AgentStatus: React.FC = () => (
  <div>
    <ul className="dp-Agent-Status">
      <li className="dp-MenuBarItem">
        <Icon name="voice-call" color="success" size={20} />
      </li>
      <li className="dp-MenuBarItem">
        <Icon name="chat" size={22} />
      </li>
      <li className="dp-MenuBarItem">
        <span className="dp-Badge Badge--round Badge--grey-lighter" />
        <Arrow />
      </li>
    </ul>
  </div>
);

export default AgentStatus;
