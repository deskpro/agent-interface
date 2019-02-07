import * as React from "react";
import UserInfo, { UserInfoProps } from "../../../User/UserInfo/UserInfo";
import TagBar from "../../../elements/Badges/TagBar";
import Tag from "../../../elements/Badges/Tag";
import Meta from "../../../elements/Meta/Meta";

export type TicketDetailsProps = {
  user: UserInfoProps;
  labels?: Array<{ name: string; color?: DPColor }>;
  properties?: Array<{ name: string; value: string }>;
};

const TicketDetails: React.FC<TicketDetailsProps> = ({
  user,
  labels = [],
  properties = []
}) => (
  <>
    <UserInfo {...user} />
    {!!labels.length && (
      <TagBar>
        {labels.map(({ name, color }) => (
          <Tag key={name} color={color}>
            {name}
          </Tag>
        ))}
      </TagBar>
    )}
    {!!properties.length && (
      <span className="dp-JustifyStart">
        {properties.map(prop => (
          <Meta key={prop.name} {...prop} />
        ))}
      </span>
    )}
  </>
);

export default TicketDetails;
