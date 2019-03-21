import * as React from "react";

import Meta, { MetaProps } from "../../elements/Meta/Meta";

export type CardPropertiesProps = {
  properties: MetaProps[];
};

const CardProperties: React.FC<CardPropertiesProps> = ({ properties }) => (
  <span className="dp-LevelItem dp-LevelLeft">
    {properties.map(prop => (
      <Meta key={prop.name} {...prop} />
    ))}
  </span>
);

export default CardProperties;
