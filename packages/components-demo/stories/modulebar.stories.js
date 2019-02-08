import React from "react";

import { storiesOf } from "@storybook/react";

import { ModuleBar, ModuleBarMenu } from "@deskpro/agent-interface-components";

const ModuleBarDemo = () => {
  const [activeItem, setActiveItem] = React.useState(null);
  const [isPortalsMenuVisible, setMenuPortalsVisibility] = React.useState(
    false
  );

  return (
    <ModuleBar>
      <ModuleBar.Item
        icon="ticket"
        label="Tickets"
        isActive={activeItem === "ticket"}
        onClick={() => setActiveItem("ticket")}
      />
      <ModuleBar.Item
        icon="crm"
        label="CRM"
        isActive={activeItem === "crm"}
        onClick={() => setActiveItem("crm")}
      />
      <ModuleBar.Item
        icon="chat"
        label="Chats"
        isActive={activeItem === "chat"}
        onClick={() => setActiveItem("chat")}
      />
      <ModuleBar.Item
        icon="feedback"
        label="Feedback"
        isActive={activeItem === "feedback"}
        onClick={() => setActiveItem("feedback")}
      />
      <ModuleBar.Item
        icon="publish"
        label="Publish"
        isActive={activeItem === "publish"}
        onClick={() => setActiveItem("publish")}
      />
      <ModuleBar.Item
        icon="tasks-sidebar"
        label="Tasks"
        isActive={activeItem === "tasks"}
        onClick={() => setActiveItem("tasks")}
      />
      <ModuleBar.Item
        icon="reports"
        label="Reports"
        isActive={activeItem === "reports"}
        onClick={() => setActiveItem("reports")}
      />
      <ModuleBar.Item
        icon="admin"
        label="Admin"
        isActive={activeItem === "admin"}
        onClick={() => setActiveItem("admin")}
      />
      <ModuleBar.Item
        icon="billing"
        label="Billing"
        isActive={activeItem === "billing"}
        onClick={() => setActiveItem("billing")}
      />
      <ModuleBar.Separator />
      <ModuleBar.Item
        icon="portal"
        onClick={() => setMenuPortalsVisibility(!isPortalsMenuVisible)}
      >
        <ModuleBarMenu title="Portals" isVisible={isPortalsMenuVisible}>
          <ModuleBarMenu.Item
            icon="plane"
            title="Raven Paper"
            subtitle="support.ravenpaper.com"
            link="http://support.ravenpaper.com"
          />
          <ModuleBarMenu.Item
            icon="plane-orange"
            title="Raven Paper Crafts"
            subtitle="support.ravenpapercrafts.com"
            link="http://support.ravenpapercrafts.com"
          />
          <ModuleBarMenu.Item
            icon="plane-violet"
            title="RP Europe"
            subtitle="support.rpeurope.com"
            link="http://support.rpeurope.com"
          />
        </ModuleBarMenu>
      </ModuleBar.Item>
    </ModuleBar>
  );
};

storiesOf("ModuleBar", module).add("ModuleBar", () => <ModuleBarDemo />);
