import React from "react";

import { storiesOf } from "@storybook/react";

import {
  Guides,
  MemoryRouter,
  Menu
} from "@deskpro/agent-interface-components";
import { action } from "@storybook/addon-actions";

import SectionsDemo from "./components/guides/SectionsDemo";

const guides = [
  {
    id: 4,
    title: "Sysadmin Guide",
    slug: "sysadmin-guide",
    icon: "user"
  },
  {
    id: 3,
    title: "Reports Guide",
    slug: "reports-guide",
    icon: "reports"
  },
  {
    id: 2,
    title: "Agent Guide",
    slug: "agent-guide",
    icon: "owner"
  },
  {
    id: 1,
    title: "Admin guide",
    slug: "admin-guide",
    icon: "support"
  }
];

const articles = [
  {
    id: 13,
    slug: "personalize-your-helpdesk",
    title: "Personalize your helpdesk",
    content:
      "<p>You should set the name of your helpdesk and enter the details of your official website.</p>",
    status: "published",
    children: [
      {
        id: 17,
        slug: "change-the-colours",
        title: "Change the colours",
        content: ""
      },
      {
        id: 16,
        person: null,
        language: 1,
        slug: "customize-your-portal",
        title: "Customize your portal",
        content: ""
      }
    ]
  },
  {
    id: 11,
    slug: "crm-and-usergroups",
    title: "CRM and usergroups",
    content: "",
    status: "published",
    display_order: 10,
    children: [
      {
        id: 14,
        slug: "launch-the-helpdesk",
        title: "Launch the Helpdesk!",
        content:
          "<p>Make sure your Agents know that they are going to be helping Users through Deskpro and that they are happy with the Agent interface. Publicize your new helpdesk to Users:</p>",
        status: "published"
      },
      {
        id: 15,
        slug: "extra-customization-options",
        title: "Extra customization options",
        content:
          "<p>If you'd like your Tickets to store extra data, you can change and add custom...</p>",
        status: "draft"
      }
    ]
  },
  {
    id: 10,
    slug: "automating-the-helpdesk",
    title: "Automating the helpdesk",
    content: "",
    status: "published",
    display_order: 9
  },
  {
    id: 9,
    slug: "portal",
    title: "Portal",
    status: "published",
    display_order: 11
  },
  {
    id: 8,
    slug: "ticket-fields",
    title: "Ticket fields",
    content: "",
    status: "draft",
    display_order: 8
  }
];

storiesOf("Guides", module)
  .add("Guides", () => (
    <div style={{ width: 450 }}>
      <MemoryRouter>
        <Guides items={guides} onSettingsClick={action()} />
      </MemoryRouter>
    </div>
  ))
  .add("Sections", () => (
    <div style={{ width: 450 }}>
      <SectionsDemo />
    </div>
  ))
  .add("Articles", () => (
    <div style={{ width: 450 }}>
      <Guides.ArticlesTree
        items={articles}
        renderCard={(article, cardProps) => (
          <Guides.Card
            cardId={article.id}
            {...article}
            {...cardProps}
            renderCogMenu={menuProps => (
              <Menu {...menuProps}>
                <Menu.MenuItem name="move" text="Move">
                  <Menu withFilter>
                    {articles
                      .filter(i => i.id !== article.id)
                      .map(item => (
                        <Menu.MenuItem
                          key={item.id}
                          name={item.id}
                          text={item.title}
                        />
                      ))}
                  </Menu>
                </Menu.MenuItem>
                <Menu.MenuItem name="delete" text="Delete" />
              </Menu>
            )}
          >
            {/* eslint-disable-next-line react/no-danger */}
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </Guides.Card>
        )}
      />
    </div>
  ));
