import * as React from "react";
import { Manager, Reference, Popper } from "react-popper";

import Tabs from "./Tabs";
import useWindowSize from "../../hooks/useWindowSize";

const ADD_ICON_WIDTH = 44;
const MIN_TAB_WIDTH = 160;
const PLUS_ICON_WIDTH = 44;

export interface PageTabItem {
  id: React.Key;
  title: string;
  titleIcon: React.ReactNode;
  subtitle: string;
  subtitleIcon: React.ReactNode;
}

export interface PageTabsAddMenuItem {
  id: React.Key;
  title: string;
  icon?: React.ReactNode;
}

export type PageTabsProps = {
  className?: string;
  tabs: PageTabItem[];
  addMenuItems?: PageTabsAddMenuItem[];
  addMenuTitle?: string;
  onAddClick?: (itemId: React.Key, e: React.SyntheticEvent) => void;
  activeTabId: React.Key;
  onTabClick: (tabId: React.Key, e: React.SyntheticEvent) => void;
};

const PageTabs: React.FC<PageTabsProps> = ({
  tabs,
  activeTabId,
  onTabClick,
  className
}) => {
  const [tabsWidth, setTabsWidth] = React.useState(0);
  const size = useWindowSize();
  const tabsRef = React.useRef<HTMLUListElement>(null);
  React.useEffect(
    () => {
      if (tabsRef.current instanceof HTMLUListElement) {
        setTabsWidth(tabsRef.current.clientWidth);
      }
    },
    [tabsRef, setTabsWidth, size]
  );
  const visibleItems = Math.floor(
    (tabsWidth - ADD_ICON_WIDTH - PLUS_ICON_WIDTH) / MIN_TAB_WIDTH
  );

  const [showHiddenItems, toggleHiddenItems] = React.useState<boolean>(false);

  return (
    <Tabs type="general" className={className} ref={tabsRef}>
      <Tabs.TabItem key="add" icon="add-tab" iconColor="success" iconOnly />
      {tabs
        .slice(0, visibleItems)
        .map(({ id, title, titleIcon, subtitle, subtitleIcon }) => (
          <Tabs.TabItem
            key={id}
            onTabClick={e => onTabClick(id, e)}
            isActive={activeTabId === id}
          >
            <Tabs.TabTitle icon={titleIcon}>{title}</Tabs.TabTitle>
            <Tabs.TabSubtitle icon={subtitleIcon}>{subtitle}</Tabs.TabSubtitle>
          </Tabs.TabItem>
        ))}
      {visibleItems < tabs.length && (
        <Tabs.TabItem key="plus" iconOnly>
          <Manager>
            <Reference>
              {({ ref }) => (
                <span
                  className="dp-TitleButton"
                  ref={ref}
                  role="button"
                  tabIndex={-1}
                  onClick={() => toggleHiddenItems(!showHiddenItems)}
                  onKeyPress={e =>
                    e.key === "Enter" && toggleHiddenItems(!showHiddenItems)
                  }
                >{`+${tabs.length - visibleItems}`}</span>
              )}
            </Reference>

            {showHiddenItems && (
              <Popper placement="bottom-end">
                {({ ref, style }) => (
                  <ul
                    className="dp-SelectedMore dp-Menu is-active"
                    style={style}
                    ref={ref}
                  >
                    {tabs
                      .slice(visibleItems)
                      .map(
                        ({ id, title, titleIcon, subtitle, subtitleIcon }) => (
                          <Tabs.TabItem
                            key={id}
                            onTabClick={e => onTabClick(id, e)}
                            isActive={activeTabId === id}
                          >
                            <Tabs.TabTitle icon={titleIcon}>
                              {title}
                            </Tabs.TabTitle>
                            <Tabs.TabSubtitle icon={subtitleIcon}>
                              {subtitle}
                            </Tabs.TabSubtitle>
                          </Tabs.TabItem>
                        )
                      )}
                  </ul>
                )}
              </Popper>
            )}
          </Manager>
        </Tabs.TabItem>
      )}
    </Tabs>
  );
};

export default PageTabs;
