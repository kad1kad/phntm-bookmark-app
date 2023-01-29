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

  async function urlExists(link) {
    try {
      const absoluteLink = "//" + link;
      const result = await fetch(absoluteLink, { method: "HEAD" });
      if (!result.ok) return false;
      if (result.status >= 200 && result.status < 300) return true;
      return false;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // Validate input as a URL
    const regex =
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
    if (!regex.test(link)) {
      setError("Link is not a valid URL.");
      return;
    }

    try {
      const reachable = await urlExists(link);
      if (reachable) {
        localStorage.setItem(
          "prevLinkArr",
          JSON.stringify([...linkArr, { link: `//${link}`, linkTitle }])
        );
        setLinkArr((prevLinkArr) => [
          ...prevLinkArr,
          { link: `//${link}`, linkTitle },
        ]);

        setError("");
        setLink("");
        setLinkTitle("");
      } else {
        throw new Error(`Error: ${link} is not reachable.`);
      }
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
