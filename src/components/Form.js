import React from "react";

function Form({ linkTitle, setLinkTitle, link, setLink, handleSubmit }) {
  return (
    <div>
      <form action="submit" onSubmit={handleSubmit}>
        <input
          type="text"
          required
          placeholder="URL"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <input
          type="text"
          required
          placeholder="Title"
          value={linkTitle}
          onChange={(e) => setLinkTitle(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Form;
