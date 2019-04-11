import * as React from "react";
import { render } from "react-testing-library";

import StandardKanban from "../StandardKanban";
import Card from "../../ListPane/Card";
import Menu from "../../elements/Menu/Menu";
import UserInfo from "../../User/UserInfo/UserInfo";
import Icon from "../../elements/Icon/Icon";

const columns = ["Backlog", "Started", "In Progress", "Review", "QA", "Closed"];
const columnsLength = [3, 18, 2, 6, 7, 8];

const data = columns.reduce(
  (acc, column, columnIndex) =>
    acc.concat(
      Array.from({ length: columnsLength[columnIndex] || 1 }, (_, idx) => ({
        group: { id: column, title: column },
        id: `${columnIndex}${idx}`,
        title: `Card #${columnIndex}${idx + 1}`
      }))
    ),
  []
);

describe("<StandardKanban />", () => {
  it("should match snapshot", () => {
    const { container } = render(
      <StandardKanban
        className="Kanban--cards"
        allowReorder
        checkable
        items={data}
        onDragEnd={jest.fn()}
        onLoadMore={jest.fn()}
        renderCard={(
          card,
          { isDragging, isChecked, isCheckable, onCheckChange }
        ) => (
          <Card.TicketCard
            cardId={card.id}
            title={card.title}
            isDragging={isDragging}
            checkable={isCheckable}
            checked={isChecked}
            onCheck={jest.fn()}
            icons={
              <>
                <Icon name="beetle" circle />
                <Card.TicketCard.StatusIcon
                  urgency={1}
                  status="awaiting_agent.announcement"
                />
              </>
            }
            status={<Card.TicketCard.Status />}
            renderCogMenu={menuProps => (
              <Menu {...menuProps}>
                <Menu.MenuItem name="assign" icon="avatar" text="Assignee">
                  <Menu withFilter isCheckable>
                    <Menu.MenuItem
                      key="berdyshev"
                      name="berdyshev"
                      icon="avatar"
                      text="Artem Berdyshev"
                    />
                    <Menu.MenuItem
                      key="chris"
                      name="chris"
                      icon="avatar"
                      text="Chris Nadeau"
                    />
                  </Menu>
                </Menu.MenuItem>
                <Menu.MenuItem name="bin" icon="bin" text="Delete" />
              </Menu>
            )}
          >
            <UserInfo avatar name="John Doe" email="john.doe@example.com" />
          </Card.TicketCard>
        )}
      />
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
