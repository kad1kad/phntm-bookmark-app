import React, { useEffect } from "react";
import LinkItem from "./LinkItem";

function LinkList({ linkArr, onRemove }) {
  // Re-render when linkArr changes
  useEffect(() => {
    console.log("Link list updated");
  }, [linkArr]);

  return (
    <div>
      {linkArr.map((link, index) => (
        <LinkItem
          linkArr={linkArr}
          onRemove={onRemove}
          link={link}
          index={index}
        />
      ))}
    </div>
  );
}

export default LinkList;
