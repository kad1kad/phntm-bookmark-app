import React from "react";

function Form({ linkTitle, setLinkTitle, link, setLink, handleSubmit }) {
  return (
    <div className="mt-5">
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

        <button
          className="bg-slate-900 text-slate-50 font-light tracking-wider w-28 h-10 rounded-3xl"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;
