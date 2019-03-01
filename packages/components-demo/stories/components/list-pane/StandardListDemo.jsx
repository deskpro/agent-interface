import React from "react";
import { action } from "@storybook/addon-actions";

import {
  StandardList,
  Card,
  IconGroup,
  Icon,
  Badge,
  UserInfo
} from "@deskpro/agent-interface-components";

function generateCardItems(pageNumber) {
  return Array.from({ length: 20 }, (_, idx) => {
    const id = `${pageNumber}-${idx + 1}`;
    return {
      id,
      title: `Card #${id}`
    };
  });
}

const StandardListDemo = () => {
  const [items, setItems] = React.useState(() => generateCardItems(1));
  const [containerHeight, setContainerHeight] = React.useState(null);
  const containerRef = React.useRef(null);
  React.useEffect(
    () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.offsetHeight);
      }
    },
    [containerRef]
  );

  return (
    <div style={{ maxWidth: 500, height: "100vh" }} ref={containerRef}>
      <StandardList
        items={items}
        numPages={20}
        height={containerHeight}
        onLoadItems={pageNumber => {
          setItems(generateCardItems(pageNumber));
        }}
        massActions={[{ name: "delete", label: "Delete", icon: "bin" }]}
        onMassAction={action()}
        renderItem={(item, props) => (
          <Card.Simple
            {...props}
            title={item.title}
            status={
              <>
                <IconGroup>
                  <Icon name="lock" size={18} />
                  <Badge color="grey-light" type="round" />
                </IconGroup>
                <span className="dp-TimeStatus">2 mins</span>
              </>
            }
          >
            <UserInfo name="John Doe" email="john.doe@example.com" />
          </Card.Simple>
        )}
      />
    </div>
  );
};

export default StandardListDemo;
