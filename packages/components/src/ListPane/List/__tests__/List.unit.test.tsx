import * as React from "react";
import { render, fireEvent } from "react-testing-library";

import StandardList from "../StandardList";
import Card from "../../Card";

describe("<List />", () => {
  it("should match its snapshot", () => {
    const handleCheckbox = jest.fn();
    const onLoadCallback = jest.fn();
    const { container } = render(
      <StandardList
        items={[
          { id: 1, title: "First item" },
          { id: 2, title: "Second Title" }
        ]}
        renderItem={(item, props) => (
          <Card.Simple
            {...props}
            title={item.title}
            cardId={item.id}
            onCheck={handleCheckbox}
          />
        )}
        onLoadItems={onLoadCallback}
        numPages={25}
      />
    );
    expect(container.querySelector(".dp-CardList")).toMatchSnapshot();
  });

  it("should call load callback on page clicks", () => {
    const handleCheckbox = jest.fn();
    const onLoadCallback = jest.fn();
    const { container } = render(
      <StandardList
        items={[
          { id: 1, title: "First item" },
          { id: 2, title: "Second Title" }
        ]}
        renderItem={(item, props) => (
          <Card.Simple
            {...props}
            title={item.title}
            cardId={item.id}
            onCheck={handleCheckbox}
          />
        )}
        onLoadItems={onLoadCallback}
        numPages={25}
      />
    );

    expect(container.querySelectorAll(".dp-PageNumber").length).toBe(8);

    fireEvent.click(container.querySelector("li.next a.dp-PaginationArrows"));
    expect(onLoadCallback).toBeCalledWith(2);
  });

  it("should change select_all checkbox state on item check", () => {
    const handleCheckbox = jest.fn();
    const onLoadCallback = jest.fn();
    const { container } = render(
      <StandardList
        items={[
          { id: "1ab", title: "First item" },
          { id: "2fe", title: "Second Title" }
        ]}
        renderItem={(item, props) => (
          <Card.Simple
            {...props}
            title={item.title}
            cardId={item.id}
            onCheck={handleCheckbox}
          />
        )}
        onLoadItems={onLoadCallback}
        numPages={25}
      />
    );

    expect(container.querySelector("input[value='2fe']")).toBeDefined();
    fireEvent.click(container.querySelector("input[value='2fe']"));
    expect(handleCheckbox.mock.calls[0][0]).toBe("2fe");
  });
});
