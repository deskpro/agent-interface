import * as React from "react";
import classNames from "classnames";

import TabItem from "./TabItem";
import TabTitle from "./TabTitle";
import TabSubtitle from "./TabSubtitle";

import "@deskpro/agent-interface-style/dist/components/dp-PageTabs.css";
import "@deskpro/agent-interface-style/dist/components/dp-Pageview.css";

type TabsSubComponents = {
  TabItem: typeof TabItem;
  TabTitle: typeof TabTitle;
  TabSubtitle: typeof TabSubtitle;
};

export type TabsProps = {
  className?: string;
  type?: "general" | "actions" | "dropdowns" | "icons" | "apps";
  tabsRef?: React.RefObject<HTMLUListElement>;
  children: React.ReactNode;
};

const TabsComponent: React.FC<TabsProps> = ({ type, children, tabsRef }) => (
  <ul
    className={classNames("dp-Tabs", {
      [`Tabs--${type}`]: !!type
    })}
    ref={tabsRef}
  >
    {children}
  </ul>
);

const Tabs: React.ForwardRefExoticComponent<
  TabsProps & React.RefAttributes<HTMLUListElement>
> &
  TabsSubComponents = React.forwardRef<HTMLUListElement, TabsProps>(
  (props, ref) => (
    <TabsComponent
      {...props}
      tabsRef={ref as React.RefObject<HTMLUListElement>}
    />
  )
) as React.ForwardRefExoticComponent<
  TabsProps & React.RefAttributes<HTMLUListElement>
> &
  TabsSubComponents;

Tabs.TabItem = TabItem;
Tabs.TabTitle = TabTitle;
Tabs.TabSubtitle = TabSubtitle;

export default Tabs;
