import React from "react";

function LinkItem({ linkArr }) {
  return (
    <div className="">
      {linkArr.map((link) => (
        <div
          className="p-2 flex items-center mt-5 shadow-lg rounded-lg"
          key={link.link}
        >
          <a className="" href={link.link} target="_blank" rel="noreferrer">
            {link.linkTitle}
          </a>
        </div>
      ))}
    </div>
  );
}

export default LinkItem;
