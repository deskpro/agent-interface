import React from "react";
import sample from "lodash/sample";
import subWeeks from "date-fns/sub_weeks";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
import { action } from "@storybook/addon-actions";
import uuidv5 from "uuid/v5";

import {
  Table,
  Icon,
  Card,
  UserInfo
} from "@deskpro/agent-interface-components";

const namespace = "1b671a64-40d5-491e-99b0-da01ff1f3341";

const columns = [
  { Header: "ID", accessor: "id", canSortBy: false },
  {
    Header: "Title",
    accessor: "title",
    canSortBy: true,
    minWidth: 200,
    headerClassName: "dp-TableSubject",
    Cell: ({ value, row }) => (
      <div className="dp-Level dp-SubjectItem">
        <span className="dp-Card-title">{value}</span>
        {row.original.isFavourite && (
          <Icon name="star" color="primary" size={12} />
        )}
      </div>
    )
  },
  { Header: "Department", accessor: "department", canSortBy: true },
  { Header: "Language", accessor: "language", canSortBy: true },
  {
    Header: "Last reply",
    accessor: r => distanceInWordsToNow(r.lastReply),
    canSortBy: true
  },
  {
    Header: "User",
    accessor: "user",
    canSortBy: true,
    Cell: ({ value }) => <UserInfo name={value} avatar />
  },
  {
    Header: "",
    accessor: "icon",
    width: 45,
    canSortBy: false,
    Cell: ({ value }) =>
      value ? <Icon name={value} circle color="black" /> : null
  },
  {
    Header: "",
    accessor: "urgency",
    width: 45,
    canSortBy: true,
    Cell: ({ value }) => (
      <Card.TicketCard.StatusIcon urgency={value} status="awaiting_agent" />
    )
  }
];

const SimpleTableDemo = ({ grouped, expandable }) => {
  const data = Array.from({ length: 100 }, (_, idx) => {
    const id = uuidv5((idx + 1).toString(10), namespace).substr(0, 8);
    const number = parseInt(id, 16);
    return {
      id,
      title: "Card title",
      isFavourite: Math.round(number % 2) === 1,
      department: Math.round(number % 2) === 1 ? "Sales" : "Support",
      language: sample([
        "English (UK)",
        "English (US)",
        "Italiano",
        "French",
        "Russian",
        "Ukrainian"
      ]),
      lastReply: subWeeks(new Date(), number % 10),
      user: sample([
        "Kenneth James",
        "Toby Falkirk",
        "Mark Jarvis",
        "Chris Nadeau",
        "Nick Green",
        "Artem Berdyshev"
      ]),
      icon: sample(["rocket", "beetle", null]),
      urgency: Math.round(number % 10),
      group: grouped
        ? {
            id: Math.floor(idx / 17),
            title: `Group #${Math.floor(idx / 17) + 1}`
          }
        : undefined
    };
  });

  return (
    <Table
      data={data}
      columns={columns}
      defaults={{ pageSize: 25 }}
      expandable={expandable}
      renderExpandedRow={row => `Row #${row.id}. Lorem ipsum dolar sit amet.`}
      checkable
      onCheckChange={action("check")}
      onSort={action("sort")}
    />
  );
};

export default SimpleTableDemo;
