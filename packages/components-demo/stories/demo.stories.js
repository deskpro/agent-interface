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
  BadgeCopy,
  FiltersBar,
  useFiltersBar
} from "@deskpro/agent-interface-components";

import List from "./components/list-pane/StandardListDemo";
import PageTabs from "./components/tabs/PageTabsDemo";
import ActionsBarDemo from "./components/tabs/ActionsBarDemo";

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

const Demo = () => {
  const filtersBarProps = useFiltersBar();

  return (
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
          <div
            style={{
              height: "100%",
              flex: `1 0 ${(filtersBarProps.locked ? 241 : 0) + 437}px`
            }}
          >
            <FiltersBar
              title="All Tickets"
              itemsCount={90}
              {...filtersBarProps}
            />
            <div className="dp-Level" style={{ height: "calc(100% - 48px)" }}>
              {filtersBarProps.locked && (
                <FiltersBar.Panel style={{ height: "100%" }} />
              )}
              <List style={{ height: "100%" }} />
            </div>
          </div>
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
                <div className="dp-SsoText">
                  SSO working well with Safari and IE but issue with Chrome
                  browser
                </div>
              </div>
            </div>
            <ActionsBarDemo isOutlined />
            <ActionsBarDemo />
          </div>
        </div>
      </div>
    </div>
  );
};

storiesOf("Pages", module).add("Full Page Demo", () => <Demo />);
