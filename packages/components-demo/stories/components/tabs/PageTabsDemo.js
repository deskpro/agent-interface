import React from "react";
import { PageTabs } from "@deskpro/agent-interface-components";

const smallTabsSet = [
  {
    id: 1,
    title: "Re: Need some help!",
    titleIcon: "mail",
    subtitle: "Zack Prudent",
    subtitleIcon: "avatar"
  }
];

const bigTabsSet = [
  {
    id: 1,
    title: "Re: Need some help!",
    titleIcon: "mail",
    subtitle: "Zack Prudent",
    subtitleIcon: "avatar"
  },
  {
    id: 2,
    title: "SSO working well with Deskpro",
    titleIcon: "mail",
    subtitle: "Zack Prudent",
    subtitleIcon: "avatar"
  },
  {
    id: 3,
    title: "Techcompany",
    titleIcon: "mail",
    subtitle: "Organization",
    subtitleIcon: null
  },
  {
    id: 4,
    title: "Re: Need some help!",
    titleIcon: "mail",
    subtitle: "Zack Prudent",
    subtitleIcon: "avatar"
  },
  {
    id: 5,
    title: "Single line item",
    titleIcon: "mail",
    subtitle: "Single line item",
    subtitleIcon: "avatar"
  },
  {
    id: 6,
    title: "Single line item",
    titleIcon: "mail",
    subtitle: "Single line item",
    subtitleIcon: "avatar"
  },
  {
    id: 7,
    title: "Single line item",
    titleIcon: "mail",
    subtitle: "Single line item",
    subtitleIcon: "avatar"
  },
  {
    id: 8,
    title: "Re: Need some help!",
    titleIcon: "mail",
    subtitle: "Zack Prudent",
    subtitleIcon: "avatar"
  },
  {
    id: 9,
    title: "Techcompany",
    titleIcon: "mail",
    subtitle: "Organization",
    subtitleIcon: null
  }
];

const PageTabsDemo = ({ full = false }) => {
  const [activeTabID, setActiveTab] = React.useState(1);
  return (
    <PageTabs
      activeTabId={activeTabID}
      onTabClick={tabId => setActiveTab(tabId)}
      tabs={full ? bigTabsSet : smallTabsSet}
    />
  );
};

export default PageTabsDemo;
