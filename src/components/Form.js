import React from "react";

function Form({ linkTitle, setLinkTitle, link, setLink }) {
  function handleSubmit(e) {
    e.preventDefault();

    console.log(link, linkTitle);
  }

  return (
    <div>
      <form action="submit" onClick={handleSubmit}>
        <input
          type="text"
          placeholder="URL"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <input
          type="text"
          placeholder="Title"
          value={linkTitle}
          onChange={(e) => setLinkTitle(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
