import * as React from "react";
import { render, fireEvent } from "react-testing-library";

import FieldGroupingList from "../FieldGroupingList";

const items = [
  {
    id: 100,
    title: "All",
    count: 900
  },
  {
    id: 110,
    title: "Regulated",
    count: 80
  },
  {
    id: 105,
    title: "IT",
    count: 5
  },
  {
    type: "department",
    id: 123,
    title: "Sales",
    count: 100,
    children: [
      {
        type: "department",
        id: 124,
        title: "Presales",
        count: 50
      },
      {
        type: "department",
        id: 125,
        title: "Non-Profit",
        count: 50,
        children: [
          {
            type: "department",
            id: 126,
            title: "Charity",
            count: 40
          },
          {
            type: "department",
            id: 127,
            title: "Religious",
            count: 10
          }
        ]
      }
    ]
  },
  {
    type: "department",
    id: 987,
    title: "Support",
    count: 500
  },
  {
    id: 888,
    title: "HR",
    count: 25
  }
];

describe("<FieldGroupingList />", () => {
  it("should match its snapshot", () => {
    const onSelectChange = jest.fn();
    const { container } = render(
      <FieldGroupingList items={items} onSelectChange={onSelectChange} />
    );
    expect(container).toMatchSnapshot();
  });
});
