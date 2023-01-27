import React from "react";

function Form({
  linkTitle,
  setLinkTitle,
  link,
  setLink,
  handleSubmit,
  ClearAll,
}) {
  return (
    <div className="mt-10">
      <form action="submit" onSubmit={handleSubmit}>
        <input
          className="h-10"
          type="text"
          required
          placeholder="URL"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <input
          className="h-10"
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

      <button onClick={ClearAll}>Delete All</button>
    </div>
  );
}

export default Form;
