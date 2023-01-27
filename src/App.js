import isReachable from "is-reachable";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import LinkList from "./components/LinkList";

function App() {
  // State for Form comp
  const [link, setLink] = useState("");
  const [linkTitle, setLinkTitle] = useState("");
  const [linkArr, setLinkArr] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (await isReachable(link)) {
        setLinkArr((prevLinkArr) => [...prevLinkArr, { link, linkTitle }]);
        setLink("");
        setLinkTitle("");
      } else {
        throw new Error(`Error: ${link} is not reachable.`);
      }
    } catch (err) {
      console.error(err);
      alert("Invalid link. Please enter a valid link.");
    }
  }

  useEffect(() => {
    console.log(linkArr);
  }, [linkArr]);

  return (
    <div className="p-5">
      <h1 className="text-slate-800 text-lg">Bookmark it.</h1>

      <Form
        link={link}
        setLink={setLink}
        linkTitle={linkTitle}
        setLinkTitle={setLinkTitle}
        handleSubmit={handleSubmit}
      />

      <LinkList linkArr={linkArr} />
    </div>
  );
}

export default App;
