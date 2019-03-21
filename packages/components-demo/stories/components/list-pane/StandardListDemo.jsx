import React from "react";
import { action } from "@storybook/addon-actions";
import uuid from "uuid";
import uuidv5 from "uuid/v5";
import inPercy from "@percy-io/in-percy";

import {
  StandardList,
  Card,
  IconGroup,
  Icon,
  Badge,
  UserInfo,
  Menu
} from "@deskpro/agent-interface-components";

let seed = 1;

function createItem(group) {
  let id;
  if (!inPercy()) {
    id = uuid();
  } else {
    const namespace = "1b671a64-40d5-491e-99b0-da01ff1f3341";
    id = uuidv5(seed.toString(10), namespace);
    seed += 1;
  }
  return {
    id,
    title: `Card #${id.substr(0, 8)}`,
    group
  };
}

function generateCardItems() {
  return Array.from({ length: 20 }, createItem);
}

function generateGroupedCardItems(pageNumber) {
  return Array.from({ length: 20 }, (_, idx) => {
    const groupId = Math.floor(((pageNumber - 1) * 20 + idx) / 27);
    return createItem({ id: groupId, title: `GROUP #${groupId + 1}` });
  });
}

const StandardListDemo = ({ grouped = false }) => {
  const [loadedPage, setLoadedPage] = React.useState(1);
  const loadCallback = grouped ? generateGroupedCardItems : generateCardItems;
  const [items, setItems] = React.useState(loadCallback(loadedPage));
  const [containerHeight, setContainerHeight] = React.useState(null);
  const containerRef = React.useRef(null);
  React.useEffect(() => {
    if (containerRef.current) {
      setContainerHeight(containerRef.current.offsetHeight);
    }
  }, [containerRef]);

  const handleItemDelete = React.useCallback(
    itemId => {
      const [, cardId] = itemId.split("/");
      setItems(items.filter(i => i.id !== cardId));
    },
    [items, setItems]
  );

  const handleAdd = React.useCallback(() => {
    setItems([createItem(items[0].group)].concat(items));
  }, [items, setItems]);

  return (
    <div
      style={{ maxWidth: 500, height: "100vh", overflowX: "hidden" }}
      ref={containerRef}
    >
      <StandardList
        items={items}
        numPages={20}
        height={containerHeight}
        onLoadItems={pageNumber => {
          setLoadedPage(pageNumber);
          setItems(loadCallback(pageNumber));
        }}
        massActions={[{ name: "delete", label: "Delete", icon: "bin" }]}
        onMassAction={action()}
        showAddButton
        onAddClick={handleAdd}
        renderItem={(item, props) => (
          <Card.Simple
            {...props}
            title={item.title}
            icons={
              <IconGroup>
                <Icon name="lock" size={18} />
                <Badge color="neutral" type="round">
                  2
                </Badge>
              </IconGroup>
            }
            status={<span className="dp-TimeStatus">2 mins</span>}
            renderCogMenu={menuProps => (
              <Menu {...menuProps}>
                <Menu.MenuItem
                  name={`delete/${item.id}`}
                  icon="bin"
                  text="Delete"
                  onClick={handleItemDelete}
                />
              </Menu>
            )}
          >
            <UserInfo avatar name="John Doe" email="john.doe@example.com" />
          </Card.Simple>
        )}
      />
    </div>
  );
};

export default StandardListDemo;
