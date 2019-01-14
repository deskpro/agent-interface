import * as React from "react";
import classNames from "classnames";

import TabItem, { TabItemProps } from "./TabItem";
import TabTitle from "./TabTitle";
import TabSubtitle from "./TabSubtitle";

import "@deskpro/agent-interface-style/dist/components/dp-PageTabs.css";
import "@deskpro/agent-interface-style/dist/components/dp-Pageview.css";

type TabsSubComponents = {
  TabItem: typeof TabItem;
  TabTitle: typeof TabTitle;
  TabSubtitle: typeof TabSubtitle;
};

type MenuItemKey = React.Key | null;

export type TabsProps = {
  className?: string;
  type?: "general" | "actions" | "dropdowns" | "icons" | "apps";
  defaultActiveKey?: MenuItemKey;
  children: React.ReactElement<any>[];
};

const Tabs: React.FC<TabsProps> & TabsSubComponents = ({
  type,
  defaultActiveKey = null,
  children
}) => {
  const isMenu = ["actions", "apps"].includes(type as string);

  const [activeKey, setActiveKey] = React.useState<MenuItemKey>(() => {
    if (defaultActiveKey) {
      return defaultActiveKey;
    }
    let key: MenuItemKey = null;

    React.Children.forEach(children, child => {
      if (!key && (child as React.ReactElement<any>).key) {
        ({ key } = child as React.ReactElement<any>);
      }
    });

    return key;
  });

  const [openedMenu, setOpenedMenu] = React.useState<MenuItemKey>(null);

  const menuRef = React.useRef<HTMLUListElement>(null);

  React.useEffect(() => {
    const handleMouseDown = (e: Event) => {
      if (
        openedMenu &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        e.stopPropagation();
        setOpenedMenu(null);
      }
    };
    document.addEventListener("mousedown", handleMouseDown);

    return () => document.removeEventListener("mousedown", handleMouseDown);
  }, []);

  const handleTabClick = (
    targetKey: MenuItemKey,
    e: React.MouseEvent<HTMLElement>
  ) => {
    e.preventDefault();
    if (targetKey !== activeKey) {
      setActiveKey(targetKey);
    }
  };

  const handleMenuToggle = (
    targetMenu: MenuItemKey,
    e: React.MouseEvent<HTMLElement>
  ) => {
    e.stopPropagation();
    setOpenedMenu(openedMenu === targetMenu ? null : targetMenu);
  };

  return (
    <ul
      className={classNames("dp-Tabs", {
        [`Tabs--${type}`]: !!type
      })}
      ref={menuRef}
    >
      {React.Children.map(
        children as React.ReactElement<TabItemProps>[],
        (child: React.ReactElement<TabItemProps>, index) => {
          const key = child.key || index;
          return React.cloneElement(child, {
            isActive:
              (activeKey === key && !isMenu) || (isMenu && openedMenu === key),
            isExpanded: openedMenu === key,
            onTabClick: (e: React.MouseEvent<HTMLElement>) =>
              isMenu ? handleMenuToggle(key, e) : handleTabClick(key, e),
            onMenuToggle: (e: React.MouseEvent<HTMLElement>) =>
              handleMenuToggle(key, e)
          });
        }
      )}
    </ul>
  );
};

Tabs.TabItem = TabItem;
Tabs.TabTitle = TabTitle;
Tabs.TabSubtitle = TabSubtitle;

export default Tabs;
