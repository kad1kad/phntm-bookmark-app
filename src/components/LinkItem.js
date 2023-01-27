import React from "react";

function LinkItem({ linkArr, onRemove }) {
  return (
    <div>
      {linkArr.map((link, index) => (
        <div
          className="p-2 flex justify-between items-center mt-5 shadow-lg rounded-lg"
          key={link.link}
        >
          <a className="" href={link.link} target="_blank" rel="noreferrer">
            {link.linkTitle}
          </a>
          <button onClick={() => onRemove(index)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default LinkItem;
