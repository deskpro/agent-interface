import * as React from "react";

import ModuleBar from "./ModuleBar";
import ModuleBarMenu from "./ModuleBarMenu";

export interface SimpleModuleBarItem {
  icon: string;
  label: string;
  name: React.Key;
}

export interface SimpleModuleBarPortalLink {
  icon: "plane" | "plane-violet" | "plane-orange";
  title: string;
  subtitle: string;
  link: string;
}

export type SimpleModuleBarProps = {
  className?: string;
  items: Array<SimpleModuleBarItem | "-">;
  portalMenuTitle?: string;
  portalMenuLinks?: SimpleModuleBarPortalLink[];
  onItemClick: (itemName: React.Key, e: React.SyntheticEvent) => void;
};

const SimpleModuleBar = ({
  className,
  items,
  onItemClick,
  portalMenuTitle = "Portals",
  portalMenuLinks = []
}) => {
  const [activeItem, setActiveItem] = React.useState<React.Key>();
  const [isPortalsMenuVisible, setMenuPortalsVisibility] = React.useState<
    boolean
  >(false);

  return (
    <ModuleBar className={className}>
      {items.map((item: SimpleModuleBarItem | "-", index: number) => {
        if (item === "-") {
          // eslint-disable-next-line react/no-array-index-key
          return <ModuleBar.Separator key={`separator_${index}`} />;
        }
        const { name, ...itemProps } = item;
        return (
          <ModuleBar.Item
            {...itemProps}
            key={name}
            isActive={activeItem === name}
            onClick={e => {
              setActiveItem(name);
              onItemClick(name, e);
            }}
          />
        );
      })}
      {!!portalMenuLinks.length && (
        <ModuleBar.Separator key="portal-separator" />
      )}
      {!!portalMenuLinks.length && (
        <ModuleBar.Item
          icon="portal"
          key="portal"
          onClick={() => setMenuPortalsVisibility(!isPortalsMenuVisible)}
        >
          <ModuleBarMenu
            title={portalMenuTitle}
            isVisible={isPortalsMenuVisible}
          >
            {portalMenuLinks.map((link: SimpleModuleBarPortalLink) => (
              <ModuleBarMenu.Item {...link} key={link.title} />
            ))}
          </ModuleBarMenu>
        </ModuleBar.Item>
      )}
    </ModuleBar>
  );
};

export default SimpleModuleBar;
