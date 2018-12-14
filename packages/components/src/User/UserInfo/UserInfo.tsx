import * as React from "react";
import classNames from "classnames";

import Icon from "../../elements/Icon/Icon";

export type UserInfoProps = {
  name: string;
  avatar?: boolean | React.ReactNode;
  email?: string;
  className?: string;
};

const UserInfo: React.SFC<UserInfoProps> = ({
  name,
  avatar = false,
  email,
  className
}) => (
  <span className={classNames("dp-UserInfo", className)}>
    {typeof avatar === "boolean" && avatar && <Icon name="avatar" size={16} />}
    {typeof avatar !== "boolean" && avatar}
    <span className="dp-UserName">
      {name}
      {!!email && (
        <a href={`mailto:${email}`} className="dp-UserEmail">
          &lt;{email}&gt;
        </a>
      )}
    </span>
  </span>
);

export default UserInfo;
