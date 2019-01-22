import * as React from "react";
import classNames from "classnames";
import Scrollbars from "react-custom-scrollbars";
import * as debounce from "lodash/debounce";

export type ScrollAreaProps = {
  className?: string;
  contentClassName?: string;
  horizontal?: boolean;
  vertical?: boolean;
  threshold?: number;
  onTresholdReach?(): void;
  style?: object;
};

const ScrollArea: React.FC<ScrollAreaProps & { scrollRef?: React.Ref<{}> }> = ({
  className,
  contentClassName,
  threshold,
  onTresholdReach,
  scrollRef,
  style,
  children
}) => {
  const scrollCallback = React.useCallback(
    debounce(values => {
      if (!threshold || !onTresholdReach) {
        return;
      }

      if (
        (threshold <= 1 && values.top >= threshold) ||
        (threshold > 1 && values.clientHeight * values.top >= threshold)
      ) {
        onTresholdReach();
      }
    }, 250),
    [threshold]
  );

  return (
    <Scrollbars
      className={classNames("dp-ScrollArea", className)}
      ref={scrollRef}
      // autoHeight
      // hideTracksWhenNotNeeded
      style={style}
      onScrollFrame={scrollCallback}
      renderTrackVertical={(p: object) => (
        <div {...p} className="dp-ScrollArea-trackVertical" />
      )}
      renderThumbVertical={(p: object) => (
        <div {...p} className="dp-ScrollArea-thumbVertical" />
      )}
      renderTrackHorizontal={(p: object) => (
        <div {...p} className="dp-ScrollArea-trackHorizontal" />
      )}
      renderThumbHorizontal={(p: object) => (
        <div {...p} className="dp-ScrollArea-thumbHorizontal" />
      )}
      renderView={(p: object) => (
        <div
          {...p}
          className={classNames("dp-ScrollArea-view", contentClassName)}
        />
      )}
    >
      {children}
    </Scrollbars>
  );
};

export default React.forwardRef((props, ref) => (
  <ScrollArea {...props} scrollRef={ref} />
)) as React.FC<ScrollAreaProps>;
