import * as React from "react";
import classNames from "classnames";
import Icon from "../Icon/Icon";
import Arrow from "../../Button/Arrow";

type DropDownChildrenProps = {
  isOpened: boolean;
  setOpened(opened: boolean): void;
};

export type DropDrownProps = {
  className?: string;
  icon?: string;
  label: string;
  subLabel?: string;
  children(props: DropDownChildrenProps): React.ReactNode;
};

const DropDown: React.FC<DropDrownProps> = ({
  className,
  icon,
  label,
  subLabel,
  children
}) => {
  const [isOpened, setOpened] = React.useState(false);
  return (
    <div
      className={classNames("dp-Dropdown", className, {
        "is-active": isOpened
      })}
    >
      {!!icon && (
        <Icon
          name={icon}
          size={subLabel ? 25 : 15}
          color={isOpened ? "primary" : "neutral"}
        />
      )}
      <span className="dp-SelectGroup">
        <span className="dp-ItemRow">
          <span className="dp-Title">{label}</span>
          <Arrow onClick={() => setOpened(!isOpened)} />
        </span>
        {!!subLabel && (
          <span className="dp-ItemRow">
            <span className="dp-Subtitle">{subLabel}</span>
          </span>
        )}
      </span>
      {children({ isOpened, setOpened })}
    </div>
  );
};

export default DropDown;
