import React from "react";
import sample from "lodash/sample";
import subWeeks from "date-fns/sub_weeks";
import distanceInWordsToNow from "date-fns/distance_in_words_to_now";
import { action } from "@storybook/addon-actions";

import {
  Table,
  Icon,
  Card,
  UserInfo
} from "@deskpro/agent-interface-components";

const columns = [
  { Header: "ID", accessor: "id" },
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

const SimpleTableDemo = () => {
  const data = Array.from({ length: 200 }, (_, idx) => ({
    id: 1123 + idx,
    title: "Card title",
    isFavourite: Math.round((Math.random() * 10) % 2) === 1,
    department:
      Math.round((Math.random() * 10) % 2) === 1 ? "Sales" : "Support",
    language: sample([
      "English (UK)",
      "English (US)",
      "Italiano",
      "French",
      "Russian",
      "Ukrainian"
    ]),
    lastReply: subWeeks(new Date(), Math.random() * 10),
    user: sample([
      "Kenneth James",
      "Toby Falkirk",
      "Mark Jarvis",
      "Chris Nadeau",
      "Nick Green",
      "Artem Berdyshev"
    ]),
    icon: sample(["rocket", "beetle", null]),
    urgency: Math.round(Math.random() * 10)
  }));

  return (
    <Table
      data={data}
      columns={columns}
      defaults={{ pageSize: 25 }}
      expandable
      renderExpandedRow={row => `Row #${row.id}. Lorem ipsum dolar sit amet.`}
      checkable
      onCheckChange={action()}
    />
  );
};

export default SimpleTableDemo;
