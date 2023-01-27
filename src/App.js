import { useState } from "react";
import Form from "./components/Form";

function App() {
  // State for Form comp
  const [link, setLink] = useState("");
  const [linkTitle, setLinkTitle] = useState("");

  const [linkArr, setLinkArr] = useState([]);

  function addLinkToArr() {}

  return (
    <div className="p-5">
      <h1 className="text-slate-800 text-lg">Bookmark it.</h1>

      <Form
        link={link}
        setLink={setLink}
        linkTitle={linkTitle}
        setLinkTitle={setLinkTitle}
      />
    </div>
  );
}

export default App;
