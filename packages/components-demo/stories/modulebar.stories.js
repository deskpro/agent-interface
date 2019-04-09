import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import {
  ModuleBar,
  ModuleBarMenu,
  SimpleModuleBar
} from "@deskpro/agent-interface-components";

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
        onClick={() => {
          setActiveItem("ticket");
          action()("ticket");
        }}
      />
      <ModuleBar.Item
        icon="crm"
        label="CRM"
        isActive={activeItem === "crm"}
        onClick={() => {
          setActiveItem("crm");
          action()("crm");
        }}
      />
      <ModuleBar.Item
        icon="chat"
        label="Chats"
        isActive={activeItem === "chat"}
        onClick={() => {
          setActiveItem("chat");
          action()("chat");
        }}
      />
      <ModuleBar.Item
        icon="feedback"
        label="Feedback"
        isActive={activeItem === "feedback"}
        onClick={() => {
          setActiveItem("feedback");
          action()("feedback");
        }}
      />
      <ModuleBar.Item
        icon="publish"
        label="Publish"
        isActive={activeItem === "publish"}
        onClick={() => {
          setActiveItem("publish");
          action()("publish");
        }}
      />
      <ModuleBar.Item
        icon="tasks-sidebar"
        label="Tasks"
        isActive={activeItem === "tasks"}
        onClick={() => {
          setActiveItem("tasks");
          action()("tasks");
        }}
      />
      <ModuleBar.Item
        icon="reports"
        label="Reports"
        isActive={activeItem === "reports"}
        onClick={() => {
          setActiveItem("reports");
          action()("reports");
        }}
      />
      <ModuleBar.Item
        icon="admin"
        label="Admin"
        isActive={activeItem === "admin"}
        onClick={() => {
          setActiveItem("admin");
          action()("admin");
        }}
      />
      <ModuleBar.Item
        icon="billing"
        label="Billing"
        isActive={activeItem === "billing"}
        onClick={() => {
          setActiveItem("billing");
          action()("billing");
        }}
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

const modules = [
  { icon: "ticket", name: "ticket", label: "Tickets" },
  { icon: "crm", name: "crm", label: "CRM" },
  { icon: "chat", name: "chat", label: "Chats" },
  { icon: "feedback", name: "feedback", label: "Feedback" },
  { icon: "publish", name: "publish", label: "Publish" },
  { icon: "tasks-sidebar", name: "tasks-sidebar", label: "Tasks" },
  { icon: "reports", name: "reports", label: "Reports" },
  { icon: "admin", name: "admin", label: "Admin" },
  { icon: "billing", name: "billing", label: "Billing" }
];

const portalLinks = [
  {
    icon: "plane",
    title: "Raven Paper",
    subtitle: "support.ravenpaper.com",
    link: "http://support.ravenpaper.com"
  },
  {
    icon: "plane-orange",
    title: "Raven Paper Crafts",
    subtitle: "support.ravenpapercrafts.com",
    link: "http://support.ravenpapercrafts.com"
  },
  {
    icon: "plane-violet",
    title: "RP Europe",
    subtitle: "support.rpeurope.com",
    link: "http://support.rpeurope.com"
  }
];

storiesOf("ModuleBar", module)
  .add("ModuleBar", () => <ModuleBarDemo />)
  .add("Simple ModuleBar", () => (
    <SimpleModuleBar
      items={modules}
      portalMenuLinks={portalLinks}
      onItemClick={action()}
    />
  ));
