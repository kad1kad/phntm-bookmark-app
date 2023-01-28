import isReachable from "is-reachable";
import { useState } from "react";
import Form from "./components/Form";
import LinkList from "./components/LinkList";

function App() {
  // State for Form comp
  const [link, setLink] = useState("");
  const [linkTitle, setLinkTitle] = useState("");
  const [linkArr, setLinkArr] = useState([]);
  const [error, setError] = useState("");

  function ClearAll() {
    setLinkArr([]);
  }

  const onRemove = (index) => {
    // Remove link from array
    const newLinkArr = linkArr.filter((link, i) => i !== index);
    setLinkArr(newLinkArr);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    // Check if link is reachable
    try {
      if (await isReachable(link)) {
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
      // Catch error
    } catch (err) {
      console.error(err);
      setError("Link is not valid.");
    }
  }

  return (
    <div className="p-5 relative h-[100%] max-w-[60rem] m-auto">
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
        ClearAll={ClearAll}
      />

      <LinkList onRemove={onRemove} setLinkArr={setLinkArr} linkArr={linkArr} />
    </div>
  );
}

export default App;
