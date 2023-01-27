import React, { useEffect } from "react";
import LinkItem from "./LinkItem";

function LinkList({ linkArr, onRemove, setLinkArr }) {
  // Re-render when linkArr changes
  useEffect(() => {
    console.log("Link list updated");
  }, [linkArr]);

  return (
    <div>
      <LinkItem linkArr={linkArr} onRemove={onRemove} />
    </div>
  );
}

export default LinkList;
