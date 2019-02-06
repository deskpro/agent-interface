import * as React from "react";
import ReactPagination from "react-paginate";

// import Icon from "../elements/Icon/Icon";
import GotoPage from "./GotoPage";

import "@deskpro/agent-interface-style/dist/components/dp-ListPane.css";

export type PaginationProps = {
  numPages: number;
  currentPage: number;
  showGotoPage?: boolean;
  onPageChange: (page: number) => void;
  proximity?: number;
};

const Pagination: React.FC<PaginationProps> = ({
  numPages,
  currentPage,
  showGotoPage = false,
  onPageChange,
  proximity = 2
}) => {
  const handlePageChange = React.useCallback(({ selected }) => {
    // ReactPagination starts page numbering from zero, but we want to start from one.
    onPageChange(selected + 1);
  }, []);

  let pageRange = proximity * 2 + 1;

  // We need to always display 5+proximity*2 items (even counting the ellipses),
  // but ReactPagination doesn't count them. So we need to adjust pageRange value.
  if (currentPage <= 4) {
    pageRange += 1;
  } else if (currentPage > numPages - 4) {
    pageRange += 2;
  }

  return (
    <span className="dp-Pagination-container">
      <ReactPagination
        forcePage={currentPage - 1}
        pageCount={numPages}
        marginPagesDisplayed={1}
        pageRangeDisplayed={pageRange}
        disableInitialCallback={false}
        pageLinkClassName="dp-PageNumber"
        activeLinkClassName="is-active"
        containerClassName="dp-Pagination"
        breakLinkClassName="dp-BreakPagination"
        previousLabel={<span className="dp-Icon dp-arrowLeft Icon--primary" />}
        previousLinkClassName="dp-PaginationArrows"
        nextLabel={<span className="dp-Icon dp-arrowRight Icon--primary" />}
        nextLinkClassName="dp-PaginationArrows"
        onPageChange={handlePageChange}
      />
      {showGotoPage && <GotoPage numPages={numPages} onChange={onPageChange} />}
    </span>
  );
};

export default Pagination;
