import * as React from "react";

import TagBar from "../../elements/Badges/TagBar";
import Tag from "../../elements/Badges/Tag";

export interface LabelItem {
  name: string;
  color?: DPColor;
}

export type LabelsProps = {
  labels: [];
};

const Labels: React.FC<LabelsProps> = ({ labels }) => (
  <TagBar className="dp-LevelItem dp-LevelLeft">
    {labels.map(({ name, color }) => (
      <Tag key={name} color={color}>
        {name}
      </Tag>
    ))}
  </TagBar>
);

export default Labels;
