import * as React from "react";
import classNames from "classnames";

import TabItem, { TabItemProps } from "./TabItem";

import "@deskpro/agent-interface-style/dist/components/dp-PageTabs.css";
import "@deskpro/agent-interface-style/dist/components/dp-Pageview.css";

export type TabsProps = {
  className?: string;
  type?: "general" | "actions" | "dropdowns" | "icons" | "apps";
  defaultActiveKey?: React.Key | null;
  children: React.ReactElement<any>[];
};

export type TabsState = Readonly<{
  activeKey: React.Key | null;
  openedMenu: React.Key | null;
}>;

const getDefaultActiveKey = (props: TabsProps) => {
  let activeKey: React.Key | null = null;
  React.Children.forEach(props.children, child => {
    if (!activeKey && (child as React.ReactElement<any>).key) {
      activeKey = (child as React.ReactElement<any>).key;
    }
  });
  return activeKey;
};

export default class Tabs extends React.PureComponent<TabsProps, TabsState> {
  static TabItem = TabItem;

  static defaultProps: Partial<TabsProps> = {
    defaultActiveKey: null
  };

  readonly state: TabsState = {
    activeKey:
      // eslint-disable-next-line react/destructuring-assignment
      this.props.defaultActiveKey || getDefaultActiveKey(this.props) || null,
    openedMenu: null
  };

  handleTabClick = (targetKey: React.Key, e: React.MouseEvent<HTMLElement>) => {
    const { activeKey } = this.state;
    e.preventDefault();
    if (targetKey !== activeKey) {
      this.setState({ activeKey: targetKey });
    }
  };

  handleMenuToggle = (
    targetMenu: React.Key,
    e: React.MouseEvent<HTMLElement>
  ) => {
    e.stopPropagation();
    this.setState(({ openedMenu }: TabsState) => ({
      openedMenu: openedMenu === targetMenu ? null : targetMenu
    }));
  };

  render() {
    const { type, children } = this.props;
    const { activeKey, openedMenu } = this.state;

    return (
      <ul
        className={classNames("dp-Tabs", {
          [`Tabs--${type}`]: !!type
        })}
      >
        {React.Children.map(
          children as React.ReactElement<TabItemProps>[],
          (child: React.ReactElement<TabItemProps>, index) => {
            const key = child.key || index;
            return React.cloneElement(child, {
              isActive: activeKey === key,
              isExpanded: openedMenu === key,
              onTabClick: (e: React.MouseEvent<HTMLElement>) =>
                this.handleTabClick(key, e),
              onMenuToggle: (e: React.MouseEvent<HTMLElement>) =>
                this.handleMenuToggle(key, e)
            });
          }
        )}
      </ul>
    );
  }
}
