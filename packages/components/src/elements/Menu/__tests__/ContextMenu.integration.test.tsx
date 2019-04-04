import * as React from "react";
import { mount } from "enzyme";

import ContextMenu from "../ContextMenu";
import Menu from "../Menu";

describe("<ContextMenu />", () => {
  it("should open on right click", () => {
    const handleClick = jest.fn();
    const wrapper = mount(
      <div>
        <ContextMenu
          renderMenu={menuProps => (
            <Menu {...menuProps} title="Context Menu" withFilter>
              <Menu.MenuItem
                name="rollover"
                text="Rollover menu item"
                icon="lock"
                onClick={handleClick}
              />
              <Menu.MenuItem
                name="item2"
                text="List item"
                icon="on-hold"
                onClick={handleClick}
              />
              <Menu.Divider />
              <Menu.MenuItem
                name="item3"
                text="Delete"
                icon="bin"
                onClick={handleClick}
              />
            </Menu>
          )}
        >
          <div
            className="click-zone"
            style={{
              width: "500px",
              height: "300px",
              display: "flex",
              backgroundColor: "#ddd",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            Right click will open a context menu
          </div>
        </ContextMenu>
        <div className="outside-div">Outside</div>
      </div>
    );

    const value = wrapper.find(".click-zone").first();

    value.simulate("contextmenu");
    expect(wrapper.find("li.dp-Menu-title").exists()).toEqual(true);

    const mockedEvent = { target: {} };
    wrapper.find(".outside-div").simulate("click", mockedEvent);

    expect(wrapper.find("li.dp-Menu-title").exists()).toEqual(true);
  });
});
