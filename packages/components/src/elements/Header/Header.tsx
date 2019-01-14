import * as React from "react";
import classNames from "classnames";

import "@deskpro/agent-interface-style/dist/components/dp-Sidebar.css";

const Header: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className, ...props }) => (
  <div className={classNames("dp-SectionTitle", className)} {...props}>
    <div className="dp-TitleControls">{children}</div>
  </div>
);

export default Header;
