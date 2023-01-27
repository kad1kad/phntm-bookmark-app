import { useEffect, useState } from "react";
import Form from "./components/Form";
import LinkList from "./components/LinkList";

function App() {
  // State for Form comp
  const [link, setLink] = useState("");
  const [linkTitle, setLinkTitle] = useState("");
  const [linkArr, setLinkArr] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setLinkArr((prevLinkArr) => [...prevLinkArr, { link, linkTitle }]);
    setLink("");
    setLinkTitle("");

    console.log("Form Submitted");
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
