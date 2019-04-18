import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import {
  Header,
  Recent,
  AgentIM,
  Notifications,
  AgentStatus,
  Account,
  SimpleModuleBar,
  Icon,
  BadgeCopy
} from "@deskpro/agent-interface-components";

import List from "./components/list-pane/StandardListDemo";
import PageTabs from "./components/tabs/PageTabsDemo";

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

const Demo = () => (
  // const [items, setItems] = React.useState([]);

  <div className="dp-Level" style={{ width: "100vw", height: "100vh" }}>
    <SimpleModuleBar
      items={modules}
      portalMenuLinks={portalLinks}
      onItemClick={action("module select")}
    />
    <div className="dp-Level" style={{ flexDirection: "column", flex: 1 }}>
      <Header
        onSearch={action("header search")}
        left={
          <>
            <Recent />
            <AgentIM />
          </>
        }
        right={
          <>
            <Notifications />
            <AgentStatus />
            <Account />
          </>
        }
      />
      <div
        className="dp-Level"
        style={{ width: "100%", height: "calc(100% - 44px)" }}
      >
        <List style={{ height: "100%", flex: "1 0 450px" }} />
        <div
          style={{
            flex: "0 1 100%",
            height: "100%",
            overflow: "hidden"
          }}
        >
          <PageTabs full />
          <div className="dp-SsoWrap">
            <div className="dp-SsoContent">
              <Icon name="star" size={16} color="success" />
              <BadgeCopy value="1234" />
              <span className="dp-SsoText">
                SSO working well with Safari and IE but issue with Chrome
                browser
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

storiesOf("Pages", module).add("Full Page Demo", () => <Demo />);
