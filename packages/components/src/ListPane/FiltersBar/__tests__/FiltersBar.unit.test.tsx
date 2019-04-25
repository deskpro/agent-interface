import * as React from "react";
import { render, fireEvent } from "react-testing-library";

import FiltersBar from "../FiltersBar";

describe("<FiltersBar />", () => {
  it("should match snapshot for default state", () => {
    const { container } = render(
      <FiltersBar
        title="All Tickets"
        itemsCount={90}
        onToggleOpenState={jest.fn()}
        onToggleLock={jest.fn()}
        onModeChange={jest.fn()}
      />
    );

    expect(container.firstChild).toMatchSnapshot("Initial State");
  });

  it("should match snapshot for opened panel", () => {
    const { container } = render(
      <FiltersBar
        opened
        title="All Tickets"
        itemsCount={90}
        onToggleOpenState={jest.fn()}
        onToggleLock={jest.fn()}
        onModeChange={jest.fn()}
      />
    );

    expect(container.firstChild).toMatchSnapshot("With opened panel");
    expect(container.querySelector(".dp-Filters-panel")).toBeInTheDocument();
  });

  it("should toggle view modes", () => {
    const handleViewModeChange = jest.fn();
    const { container } = render(
      <FiltersBar
        opened
        title="All Tickets"
        itemsCount={90}
        onToggleOpenState={jest.fn()}
        onToggleLock={jest.fn()}
        onModeChange={handleViewModeChange}
      />
    );

    fireEvent.click(container.querySelector(".Icon--table-view"));
    expect(handleViewModeChange).toBeCalledWith("table");
    fireEvent.click(container.querySelector(".Icon--kanban-view"));
    expect(handleViewModeChange).toBeCalledWith("kanban");
  });
});
