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
  ActionsBar
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

const actionsBarOutlined = [
  {
    name: "lock",
    title: "Lock",
    icon: "lock",
    items: [
      { name: "lock", text: "Lock", icon: "lock" },
      { name: "hold", text: "Put the ticket on hold", icon: "on-hold" },
      { name: "delete", text: "Delete", icon: "bin" }
    ]
  },
  {
    name: "link",
    title: "Link",
    icon: "link",
    items: [
      { name: "create-linked", text: "Create linked ticket", icon: "lock" },
      { name: "link-existing", text: "Link existing tiket", icon: "link" },
      { name: "split", text: "Split message to new ticket", icon: "transfer" },
      { name: "merge", text: "Merge", icon: "merge" }
    ]
  },
  {
    name: "new",
    title: "New",
    icon: "new",
    items: [
      { name: "create-linked", text: "Create linked ticket", icon: "lock" },
      { name: "link-existing", text: "Link existing tiket", icon: "link" },
      { name: "split", text: "Split message to new ticket", icon: "transfer" },
      { name: "merge", text: "Merge", icon: "merge" }
    ]
  },
  {
    name: "print",
    title: "Print",
    icon: "print",
    items: [
      { name: "print", text: "Print", icon: "print" },
      { name: "download-pdf", text: "Download PDF", icon: "download" },
      { name: "download-debug", text: "Download debug file", icon: "beetle" }
    ]
  },
  {
    name: "ban",
    title: "Ban",
    icon: "ban",
    items: [
      { name: "ban", text: "Ban", icon: "ban" },
      { name: "spam", text: "Spam", icon: "spam" }
    ]
  },
  {
    name: "actions",
    title: "Actions",
    icon: "rocket",
    items: [
      { name: "action-1", text: "Misc value", icon: "rocket" },
      { name: "action-2", text: "Misc value", icon: "rocket" },
      { name: "action-3", text: "Misc value", icon: "rocket" }
    ]
  }
];

const actionsBar = [
  {
    name: "tasks",
    title: "Tasks",
    icon: "tasks",
    items: [
      { name: "lock", text: "Lock", icon: "lock" },
      { name: "hold", text: "Put the ticket on hold", icon: "on-hold" },
      { name: "delete", text: "Delete", icon: "bin" }
    ]
  },
  {
    name: "billing",
    title: "Billing",
    icon: "billing",
    items: [
      { name: "create-linked", text: "Create linked ticket", icon: "lock" },
      { name: "link-existing", text: "Link existing tiket", icon: "link" },
      { name: "split", text: "Split message to new ticket", icon: "transfer" },
      { name: "merge", text: "Merge", icon: "merge" }
    ]
  },
  {
    name: "license",
    title: "License",
    icon: "liscense",
    items: [
      { name: "create-linked", text: "Create linked ticket", icon: "lock" },
      { name: "link-existing", text: "Link existing tiket", icon: "link" },
      { name: "split", text: "Split message to new ticket", icon: "transfer" },
      { name: "merge", text: "Merge", icon: "merge" }
    ]
  },
  {
    name: "ticket-properties",
    title: "Ticket Properties",
    icon: "ticket-properties",
    items: [
      { name: "print", text: "Print", icon: "print" },
      { name: "download-pdf", text: "Download PDF", icon: "download" },
      { name: "download-debug", text: "Download debug file", icon: "beetle" }
    ]
  },
  {
    name: "follow-up",
    title: "Follow-ups",
    icon: "follow-up",
    items: [
      { name: "ban", text: "Ban", icon: "ban" },
      { name: "spam", text: "Spam", icon: "spam" }
    ]
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
          <ActionsBar
            items={actionsBarOutlined}
            onItemClick={action("actions")}
            type="outlined"
          />
          <ActionsBar items={actionsBar} onItemClick={action("tasks tabs")} />
        </div>
      </div>
    </div>
  </div>
);

storiesOf("Pages", module).add("Full Page Demo", () => <Demo />);
