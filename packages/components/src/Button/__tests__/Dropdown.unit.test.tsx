import * as React from "react";
import { render, fireEvent } from "react-testing-library";

import Dropdown from "../Dropdown";
import Menu from "../../elements/Menu/Menu";

describe("<Dropdown />", () => {
  it("should match its snapshot", () => {
    const { getByText, container } = render(
      <Dropdown
        renderMenu={menuProps => (
          <Menu {...menuProps}>
            <Menu.MenuItem
              name="select-all"
              text="Select All"
              onClick={jest.fn()}
            />
            <Menu.MenuItem
              name="select-none"
              text="Select none"
              onClick={jest.fn()}
            />
            <Menu.MenuItem name="inverse" text="Inverse" onClick={jest.fn()} />
          </Menu>
        )}
      >
        Dropdown button
      </Dropdown>
    );
    expect(getByText("Dropdown button")).toMatchSnapshot();
    expect(container.querySelector(".dp-Menu-link")).toBeNull();
  });
  it("should open on click", () => {
    const { getByText, container } = render(
      <div>
        <Dropdown
          renderMenu={menuProps => (
            <Menu {...menuProps}>
              <Menu.MenuItem
                name="select-all"
                text="Select All"
                onClick={jest.fn()}
              />
              <Menu.MenuItem
                name="select-none"
                text="Select none"
                onClick={jest.fn()}
              />
              <Menu.MenuItem
                name="inverse"
                text="Inverse"
                onClick={jest.fn()}
              />
            </Menu>
          )}
        >
          Dropdown button
        </Dropdown>
        <div>Outside box</div>
      </div>
    );

    expect(container.querySelector(".dp-Menu-link")).toBeNull();

    fireEvent(
      getByText("Dropdown button"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
    expect(getByText("Select All")).toMatchSnapshot();
    fireEvent(
      getByText("Outside box"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true
      })
    );
  });
});
