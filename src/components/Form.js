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
      <form
        className="flex justify-between"
        action="submit"
        onSubmit={handleSubmit}
      >
        <input
          className="h-10 w-[30%] mr-2 pl-1 border-gray-100 border-2 rounded-2xl placeholder:text-sm"
          type="text"
          required
          placeholder="URL"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <input
          className="h-10 w-[30%] border-gray-100 pl-1  border-2 rounded-2xl placeholder:text-sm"
          type="text"
          required
          placeholder="Title"
          value={linkTitle}
          onChange={(e) => setLinkTitle(e.target.value)}
        />

        <button
          className="bg-slate-900 text-slate-50 font-light tracking-wider w-[33%] h-10 rounded-3xl"
          type="submit"
        >
          Add
        </button>
      </form>

      {/* <button onClick={ClearAll}>Delete All</button> */}
    </div>
  );
}

export default Form;
