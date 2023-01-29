import isReachable from "is-reachable";
import { useState } from "react";
import DeleteAllLinks from "./components/DeleteAllLinks";
import Form from "./components/Form";
import LinkList from "./components/LinkList";

function App() {
  // State for Form comp
  const [link, setLink] = useState("");
  const [linkTitle, setLinkTitle] = useState("");
  // check local storage for prev links
  const [linkArr, setLinkArr] = useState(
    JSON.parse(localStorage.getItem("prevLinkArr")) || []
  );

  const [error, setError] = useState("");

  async function exists(link) {
    const result = await fetch(link, { method: "HEAD" });
    return result.ok;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // Check if link is reachable
    try {
      if (await isReachable(link)) {
        localStorage.setItem(
          "prevLinkArr",
          JSON.stringify([...linkArr, { link: link, linkTitle }])
        );
        setLinkArr((prevLinkArr) => [
          ...prevLinkArr,
          { link: link, linkTitle },
        ]);

        setError("");
        setLink("");
        setLinkTitle("");
      } else {
        throw new Error(`Error: ${link} is not reachable.`);
      }
      // Catch error
    } catch (err) {
      console.error(err);
      setError("Link is not valid.");
    }
  }

  return (
    <div className="p-5 relative min-h-screen max-w-[60rem] m-auto">
      <h1 className="text-slate-800 text-2xl font-bold tracking-wide">
        Bookmark it.
      </h1>

      <p className="absolute top-12 text-red-500"> {error} </p>

      <Form
        link={link}
        setLink={setLink}
        linkTitle={linkTitle}
        setLinkTitle={setLinkTitle}
        handleSubmit={handleSubmit}
      />

      <LinkList setLinkArr={setLinkArr} linkArr={linkArr} />

      {/* hide delete all button if no links present */}
      {linkArr.length > 0 && <DeleteAllLinks setLinkArr={setLinkArr} />}
    </div>
  );
}

export default App;
