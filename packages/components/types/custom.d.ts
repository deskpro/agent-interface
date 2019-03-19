declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare type DPColor =
  | "primary"
  | "primary-light"
  | "grey"
  | "grey-darkest"
  | "grey-dark"
  | "grey"
  | "grey-light"
  | "grey-light"
  | "grey-lighter"
  | "grey-lighest"
  | "white"
  | "danger"
  | "danger-light"
  | "warning"
  | "warning-light"
  | "neutral"
  | "neutral-light"
  | "success"
  | "success-light"
  | "info"
  | "info-light"
  | "pink"
  | "pink-light"
  | "purple"
  | "purple-light";
