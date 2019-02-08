import * as React from "react";
import classNames from "classnames";

export type ModuleBarMenuItemProps = {
  className?: string;
  icon: "plane" | "plane-violet" | "plane-orange";
  title: string;
  subtitle?: string;
  link: string;
  linkComponent?: any;
  linkAttributes?: Partial<React.AnchorHTMLAttributes<HTMLAnchorElement>>;
  isActive?: any;
};

const ModuleBarMenuItem: React.FC<ModuleBarMenuItemProps> = ({
  className,
  icon,
  title,
  subtitle,
  isActive = false,
  link,
  linkComponent = "a",
  linkAttributes = {}
}) => (
  <li
    className={classNames("dp-ModuleBarMenu-item", className, {
      "is-active": isActive
    })}
  >
    {React.createElement(
      linkComponent,
      {
        ...linkAttributes,
        [typeof linkComponent === "string" && linkComponent === "a"
          ? "href"
          : "path"]: link
      },
      <span className={`dp-Icon Icon--${icon}`} />,
      <span>
        <span className="dp-ModuleBarMenu-itemTitle">{title}</span>,
        <span className="dp-ModuleBarMenu-itemSubtitle">{subtitle}</span>
      </span>
    )}
  </li>
);

export default ModuleBarMenuItem;
