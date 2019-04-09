import * as React from "react";
import { render, fireEvent, cleanup } from "react-testing-library";

import Pagination from "../Pagination";

afterEach(cleanup);

describe("<Pagination />", () => {
  it("should match its snapshot", () => {
    const handleClick = jest.fn();
    const { getAllByRole } = render(
      <Pagination
        proximity={5}
        numPages={75}
        currentPage={2}
        onPageChange={handleClick}
      />
    );
    expect(getAllByRole("button")).toMatchSnapshot();
  });
  it("should render correct number of items based on proximity", () => {
    const handleClick = jest.fn();
    let getAllByRole;

    for (let i = 2; i < 10; i += 2) {
      ({ getAllByRole } = render(
        <Pagination
          proximity={i}
          numPages={75}
          currentPage={2}
          onPageChange={handleClick}
        />
      ));
      expect(getAllByRole("button")).toHaveLength(i * 2 + 9);
      cleanup();
    }
  });

  it("should render correct number of links and ellipses for various pages", () => {
    const handleClick = jest.fn();
    let getAllByRole;
    let getAllByText;

    for (let i = 1; i < 10; i += 1) {
      ({ getAllByRole, getAllByText } = render(
        <Pagination
          proximity={2}
          numPages={75}
          currentPage={i}
          onPageChange={handleClick}
        />
      ));
      expect(getAllByRole("button")).toHaveLength(13);
      expect(getAllByText("...")).toHaveLength(i < 5 ? 1 : 2);
      cleanup();
    }

    ({ getAllByRole, getAllByText } = render(
      <Pagination
        proximity={2}
        numPages={75}
        currentPage={22}
        onPageChange={handleClick}
      />
    ));
    expect(getAllByRole("button")).toHaveLength(13);
    expect(getAllByText("...")).toHaveLength(2);
    cleanup();

    for (let i = 75; i >= 70; i -= 1) {
      ({ getAllByRole, getAllByText } = render(
        <Pagination
          proximity={2}
          numPages={75}
          currentPage={i}
          onPageChange={handleClick}
        />
      ));
      expect(getAllByRole("button")).toHaveLength(13);
      expect(getAllByText("...")).toHaveLength(i > 71 ? 1 : 2);
      cleanup();
    }
  });

  it("shold render Go To Page form depending on showGotoPage prop", () => {
    const handleClick = jest.fn();
    let { queryByText } = render(
      <Pagination
        proximity={2}
        numPages={75}
        currentPage={1}
        onPageChange={handleClick}
      />
    );
    expect(queryByText("Go to page")).toBeNull();

    ({ queryByText } = render(
      <Pagination
        proximity={2}
        numPages={75}
        currentPage={1}
        showGotoPage
        onPageChange={handleClick}
      />
    ));
    expect(queryByText("Go to page")).not.toBeNull();
  });

  it("should submit correct page from Go to Page", () => {
    const handleClick = jest.fn();
    const { getByLabelText, getByText } = render(
      <Pagination
        proximity={2}
        numPages={75}
        currentPage={1}
        showGotoPage
        onPageChange={handleClick}
      />
    );
    fireEvent.change(getByLabelText("Go to page"), { target: { value: 22 } });
    fireEvent.click(getByText("Go"));
    expect(handleClick).toBeCalledWith(22);
  });
});
