import React from "react";
import sortBy from "lodash/sortBy";
import { Guides, Menu } from "@deskpro/agent-interface-components";

import topics from "./topics.json";

const stripHtml = html => {
  // Create a new div element
  const temporalDivElement = document.createElement("div");
  // Set the HTML content with the providen
  temporalDivElement.innerHTML = html;
  // Retrieve the text property of the element (cross-browser support)
  return temporalDivElement.textContent || temporalDivElement.innerText || "";
};

const TopicsDemo = () => (
  <Guides.TopicsList
    rootId="3"
    items={sortBy(topics.data, "display_order")}
    renderCard={(article, cardProps) => (
      <Guides.Card
        cardId={article.id}
        {...article}
        {...cardProps}
        renderCogMenu={menuProps => (
          <Menu {...menuProps}>
            <Menu.MenuItem name="move" text="Move">
              <Menu withFilter>
                {topics
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
        {article.content && `${stripHtml(article.content).substr(0, 150)}...`}
        {/* eslint-disable-next-line react/no-danger */}
        {/* <div dangerouslySetInnerHTML={{ __html: article.content }} /> */}
      </Guides.Card>
    )}
  />
);

export default TopicsDemo;
