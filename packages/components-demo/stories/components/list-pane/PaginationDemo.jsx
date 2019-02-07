import React from "react";

import { Pagination } from "@deskpro/agent-interface-components";

const PaginationDemo = ({ numPages = 75, proximity = 2, showGotoPage }) => {
  const [currentPage, setPage] = React.useState(1);

  return (
    <Pagination
      numPages={numPages}
      proximity={proximity}
      showGotoPage={showGotoPage}
      currentPage={currentPage}
      onPageChange={setPage}
    />
  );
};

export default PaginationDemo;
