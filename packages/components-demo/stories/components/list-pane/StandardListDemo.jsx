import React from "react";

import { StandardList } from "@deskpro/agent-interface-components";

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

  return (
    <div style={{ maxWidth: 500 }}>
      <StandardList
        items={items}
        numPages={20}
        onLoadItems={pageNumber => {
          setItems(generateCardItems(pageNumber));
        }}
      />
    </div>
  );
};

export default StandardListDemo;
