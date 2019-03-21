import * as React from "react";
import { mount } from "enzyme";

import OptionList from "../OptionList";

describe("<OptionList />", () => {
  it("should match its snapshot", () => {
    const wrapper = mount(
      <OptionList name="fields" checkable>
        <OptionList.Item name="agent" title="Agent" disabled checked />
        <OptionList.Item name="title" title="Title" disabled checked />
        <OptionList.Item name="id" title="ID" />
      </OptionList>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
