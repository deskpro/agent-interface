import * as React from "react";
import classNames from "classnames";
import { Manager, Reference, Popper } from "react-popper";

import Badge from "./Badge";
import Icon from "../Icon/Icon";
import CopyToClipboard from "../../common/CopyToClipboard/CopyToClipboard";

export type BadgeCopyProps = {
  value: string | number;
  className?: string;
};

const BadgeCopy: React.FC<BadgeCopyProps> = ({ value, className }) => {
  const [isOpen, setOpenState] = React.useState(false);

  return (
    <Manager>
      <Reference>
        {({ ref }) => (
          <Badge
            type="id"
            className={classNames(className, { "is-active": isOpen })}
            label={`#${value}`}
            onClick={() => setOpenState(!isOpen)}
            ref={ref}
          />
        )}
      </Reference>
      {isOpen && (
        <Popper
          placement="right"
          modifiers={{
            offset: { offset: "0,5" }
          }}
        >
          {({ ref, style }) => (
            <span className="dp-Badge-actions" ref={ref} style={style}>
              <CopyToClipboard value={value} />
              <Icon name="link" size={17} />
            </span>
          )}
        </Popper>
      )}
    </Manager>
  );
};

export default BadgeCopy;
