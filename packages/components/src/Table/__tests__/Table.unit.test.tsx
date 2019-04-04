import * as React from "react";
import { render } from "react-testing-library";

import Table from "../Table";

describe("<Table />", () => {
  it("should match its snapshot", () => {
    const { container } = render(
      <Table
        data={[
          { id: 1, title: "First item" },
          { id: 2, title: "Second Title " }
        ]}
        columns={[
          { Header: "ID", accessor: "id", canSortBy: false },
          { Header: "Title", accessor: "title" }
        ]}
        onSort={jest.fn()}
      />
    );
    expect(container.querySelector(".dp-Tableview")).toMatchSnapshot();
  });
});
