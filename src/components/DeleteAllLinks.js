import React from "react";

function DeleteAllLinks({ setLinkArr }) {
  function handleClick() {
    setLinkArr([]);
    localStorage.removeItem("prevLinkArr");
  }

  return (
    <button className="absolute bottom-5" onClick={handleClick}>
      Delete all
    </button>
  );
}

export default DeleteAllLinks;
