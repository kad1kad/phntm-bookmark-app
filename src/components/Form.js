import React from "react";

function Form({ linkTitle, setLinkTitle, link, setLink, handleSubmit }) {
  return (
    <div className="mt-10">
      <form
        className="flex justify-between gap-2"
        action="submit"
        onSubmit={handleSubmit}
      >
        <input
          className="w-full input-field border-slate-200"
          type="text"
          required
          placeholder="URL"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <input
          className=" w-full input-field border-slate-200"
          type="text"
          required
          placeholder="Title"
          value={linkTitle}
          onChange={(e) => setLinkTitle(e.target.value)}
        />

        <button
          className="bg-slate-900 text-slate-100 tracking-wider w-full h-12 rounded-3xl"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Form;
