import * as React from "react";

import Button from "../Button/Button";

export type GotoPageProps = {
  numPages: number;
  onChange: (page: number) => void;
};

const GotoPage: React.FC<GotoPageProps> = ({ onChange, numPages }) => {
  // State and handlers for Go to page.
  const [gotoPage, setGotoPage] = React.useState<number | null>(null);

  return (
    <span className="dp-PageJump">
      <label className="dp-Label dp-PageJump-label">
        Go to page
        <input
          type="number"
          min={1}
          max={numPages}
          className="dp-Input dp-PageJump-page"
          value={gotoPage || ""}
          onChange={e => setGotoPage(Number(e.target.value))}
        />
      </label>
      <Button
        size="small"
        className="dp-PageJump-button"
        onClick={() => {
          const gotoPageNumber = Number(gotoPage);
          if (gotoPageNumber > 0 && gotoPageNumber <= numPages) {
            onChange(gotoPageNumber);
          }
          setGotoPage(null);
        }}
      >
        Go
      </Button>
    </span>
  );
};

export default GotoPage;
