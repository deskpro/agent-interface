import React from "react";
import { PageTabs } from "@deskpro/agent-interface-components";

import { action } from "@storybook/addon-actions";

const smallTabsSet = [
  {
    id: 1,
    title: "Re: Need some help!",
    titleIcon: "email",
    subtitle: "Zack Prudent",
    subtitleIcon: "avatar"
  }
];

const bigTabsSet = [
  {
    id: 1,
    title: "Re: Need some help!",
    titleIcon: "email",
    subtitle: "Zack Prudent",
    subtitleIcon: "avatar"
  },
  {
    id: 2,
    title: "SSO working well with Deskpro",
    titleIcon: "email",
    subtitle: "Zack Prudent",
    subtitleIcon: "avatar"
  },
  {
    id: 3,
    title: "Techcompany",
    titleIcon: "portal",
    subtitle: "Organization",
    subtitleIcon: null
  },
  {
    id: 4,
    title: "Re: Need some help!",
    titleIcon: "email",
    subtitle: "Zack Prudent",
    subtitleIcon: "avatar"
  },
  {
    id: 5,
    title: "Single line item",
    titleIcon: "email",
    subtitle: "Single line item",
    subtitleIcon: "avatar"
  },
  {
    id: 6,
    title: "Single line item",
    titleIcon: "email",
    subtitle: "Single line item",
    subtitleIcon: "avatar"
  },
  {
    id: 7,
    title: "Single line item",
    titleIcon: "email",
    subtitle: "Single line item",
    subtitleIcon: "avatar"
  },
  {
    id: 8,
    title: "Re: Need some help!",
    titleIcon: "email",
    subtitle: "Zack Prudent",
    subtitleIcon: "avatar"
  },
  {
    id: 9,
    title: "Techcompany",
    titleIcon: "portal",
    subtitle: "Organization",
    subtitleIcon: null
  }
];

const addMenuItems = [
  { id: "ticket", title: "Ticket", icon: "ticket" },
  { id: "user", title: "Person", icon: "user" },
  { id: "portal", title: "Organization", icon: "portal" },
  { id: "article", title: "Article", icon: "publish" },
  { id: "news", title: "New Post", icon: "news" },
  { id: "download", title: "Download", icon: "download" },
  { id: "feedback", title: "feedback", icon: "feedback" },
  { id: "tasks-sidebar", title: "Task", icon: "task" }
];

const PageTabsDemo = ({ full = false }) => {
  const [tabs, setTabs] = React.useState(full ? bigTabsSet : smallTabsSet);
  const [activeTabID, setActiveTab] = React.useState(1);

  return (
    <PageTabs
      activeTabId={activeTabID}
      onTabClick={tabId => setActiveTab(tabId)}
      tabs={tabs}
      addMenuItems={addMenuItems}
      onAddClick={action()}
      onTabClose={tabId => setTabs(tabs.filter(t => t.id !== tabId))}
    />
  );
};

export default PageTabsDemo;
