import * as React from "react";
import { render, fireEvent } from "react-testing-library";

import Table from "../Table";

describe("<Table />", () => {
  it("should match its snapshot", () => {
    const { container } = render(
      <Table
        data={[
          { id: 1, title: "First item" },
          { id: 2, title: "Second Title" }
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

  it("should render 4 rows with header", () => {
    const { container } = render(
      <Table
        data={[
          { id: 1, title: "First item" },
          { id: 2, title: "Second Title" },
          { id: 3, title: "Third Title" },
          { id: 4, title: "Fourth Title" }
        ]}
        columns={[
          { Header: "ID", accessor: "id", canSortBy: false },
          { Header: "Title", accessor: "title" }
        ]}
        onSort={jest.fn()}
      />
    );
    expect(container.querySelectorAll(".dp-CustomCheckbox").length).toBe(0);
    expect(container.querySelectorAll(".dp-TableRow").length).toBe(5);
  });

  it("should render checkboxes", () => {
    const { container } = render(
      <Table
        data={[
          { id: 1, title: "First item" },
          { id: 2, title: "Second Title" },
          { id: 3, title: "Third Title" },
          { id: 4, title: "Fourth Title" }
        ]}
        columns={[
          { Header: "ID", accessor: "id", canSortBy: false },
          { Header: "Title", accessor: "title" }
        ]}
        checkable
        onCheckChange={jest.fn()}
        onSort={jest.fn()}
      />
    );
    expect(container.querySelectorAll(".dp-CustomCheckbox").length).toBe(5);
    fireEvent.click(container.querySelector(".dp-CustomCheckbox input"));
    expect(
      container.querySelectorAll(".dp-CustomCheckbox input:checked").length
    ).toBe(5);
    expect(
      container.querySelectorAll(".dp-CustomCheckbox input:not(:checked)")
        .length
    ).toBe(0);
  });

  it("should display sorting state and control", () => {
    const { container } = render(
      <Table
        data={[
          { id: 1, title: "First item" },
          { id: 2, title: "Second Title" },
          { id: 3, title: "Third Title" },
          { id: 4, title: "Fourth Title" }
        ]}
        columns={[
          { Header: "ID", accessor: "id", canSortBy: false },
          { Header: "Title", accessor: "title" }
        ]}
        checkable
        onCheckChange={jest.fn()}
        onSort={jest.fn()}
      />
    );
    expect(container.querySelectorAll(".dp-Icon.dp-arrowGroup").length).toBe(1);

    const sortEl = container.querySelector(".dp-Icon.dp-arrowGroup");
    expect(sortEl.classList.contains("is-asc")).toBeFalsy();
    expect(sortEl.classList.contains("is-desc")).toBeFalsy();

    fireEvent.click(sortEl);
    expect(sortEl.classList.contains("is-asc")).toBeTruthy();
    expect(sortEl.classList.contains("is-desc")).toBeFalsy();
    fireEvent.click(sortEl);
    expect(sortEl.classList.contains("is-asc")).toBeFalsy();
    expect(sortEl.classList.contains("is-desc")).toBeTruthy();
  });
});
