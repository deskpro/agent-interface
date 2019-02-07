import * as React from "react";

export type MetaProps = {
  name: string;
  value: string;
};

const Meta: React.FC<MetaProps> = ({ name, value }) => (
  <span className="dp-Meta">
    {name}
    {": "}
    <span className="dp-Meta-value">{value}</span>
  </span>
);

export default Meta;
