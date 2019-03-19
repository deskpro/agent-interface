import * as React from "react";
import { Manager, Reference, Popper } from "react-popper";

import Tabs from "./Tabs";
import useWindowSize from "../../hooks/useWindowSize";
import Icon from "../Icon/Icon";
import Menu from "../Menu/Menu";
import useOutsideClick from "../../hooks/useOutsideClick";

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
  icon?: string;
}

export type PageTabsProps = {
  className?: string;
  tabs: PageTabItem[];
  addMenuItems?: PageTabsAddMenuItem[];
  addMenuTitle?: string;
  onAddClick?: (itemId: React.Key, e: React.SyntheticEvent) => void;
  activeTabId: React.Key;
  onTabClick: (tabId: React.Key, e: React.SyntheticEvent) => void;
  onTabClose: (tabId: React.Key, e: React.SyntheticEvent) => void;
};

const PageTabs: React.FC<PageTabsProps> = ({
  tabs,
  activeTabId,
  onTabClick,
  addMenuItems = [],
  addMenuTitle = "Add",
  onAddClick,
  onTabClose,
  className
}) => {
  const [tabsWidth, setTabsWidth] = React.useState(0);
  const size = useWindowSize();
  const tabsRef = React.useRef<HTMLUListElement>(null);
  React.useEffect(() => {
    if (tabsRef.current instanceof HTMLUListElement) {
      setTabsWidth(tabsRef.current.clientWidth);
    }
  }, [tabsRef, setTabsWidth, size]);
  const visibleItems = Math.floor(
    (tabsWidth - ADD_ICON_WIDTH - PLUS_ICON_WIDTH) / MIN_TAB_WIDTH
  );

  const [showHiddenItems, toggleHiddenItems] = React.useState<boolean>(false);
  const hiddenItemsRef = React.useRef<HTMLUListElement>(null);
  useOutsideClick(hiddenItemsRef, () => toggleHiddenItems(false));

  const [showAddMenu, toggleAddMenu] = React.useState(false);
  const addMenuRef = React.useRef<HTMLUListElement>(null);
  useOutsideClick(addMenuRef, () => toggleAddMenu(false));

  return (
    <Tabs type="general" className={className} ref={tabsRef}>
      <Tabs.TabItem key="add" iconOnly>
        <Manager>
          <Reference>
            {({ ref }) => (
              <Icon
                name="add-tab"
                color="success"
                size={24}
                ref={ref}
                onClick={() => toggleAddMenu(!showAddMenu)}
              />
            )}
          </Reference>
          {showAddMenu && (
            <Popper
              placement="bottom-start"
              modifiers={{ offset: { offset: "-10,10" }, flip: { padding: 0 } }}
            >
              {({ ref, style }) => (
                <Menu
                  style={style}
                  menuRef={(el: HTMLUListElement) => {
                    ref(el);
                    (addMenuRef.current as HTMLUListElement) = el;
                  }}
                  onMenuClose={() => toggleAddMenu(false)}
                  title={addMenuTitle}
                >
                  {addMenuItems.map(({ id, title, icon }) => (
                    <Menu.MenuItem
                      key={id}
                      name={id}
                      text={title}
                      icon={icon}
                      onClick={onAddClick}
                    />
                  ))}
                </Menu>
              )}
            </Popper>
          )}
        </Manager>
      </Tabs.TabItem>
      {tabs
        .slice(0, visibleItems)
        .map(({ id, title, titleIcon, subtitle, subtitleIcon }) => (
          <Tabs.TabItem
            key={id}
            onTabClick={e => onTabClick(id, e)}
            isActive={activeTabId === id}
          >
            <span className="dp-TabInfoItem">
              <Tabs.TabTitle icon={titleIcon}>{title}</Tabs.TabTitle>
              <Tabs.TabSubtitle icon={subtitleIcon}>
                {subtitle}
              </Tabs.TabSubtitle>
            </span>
            <span
              className="dp-CloseBtn"
              role="button"
              tabIndex={-1}
              onClick={e => onTabClose(id, e)}
              onKeyPress={e => e.key === "Enter" && onTabClose(id, e)}
            >
              <Icon name="close" size={8} />
            </span>
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
                    ref={(el: HTMLUListElement) => {
                      ref(el);
                      (hiddenItemsRef.current as HTMLUListElement) = el;
                    }}
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
                            <span className="dp-TabInfoItem">
                              <Tabs.TabTitle icon={titleIcon}>
                                {title}
                              </Tabs.TabTitle>
                              <Tabs.TabSubtitle icon={subtitleIcon}>
                                {subtitle}
                              </Tabs.TabSubtitle>
                            </span>
                            <span
                              className="dp-CloseBtn"
                              role="button"
                              tabIndex={-1}
                              onClick={e => onTabClose(id, e)}
                              onKeyPress={e =>
                                e.key === "Enter" && onTabClose(id, e)
                              }
                            >
                              <Icon name="close" size={8} />
                            </span>
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
