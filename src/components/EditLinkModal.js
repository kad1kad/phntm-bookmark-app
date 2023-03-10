import { useState } from "react";
import { motion } from "framer-motion";

function EditLinkModal({ link, handleClose, setLinkArr, linkArr, index }) {
  // State for current link and link title
  const [currentLink, setCurrentLink] = useState(
    !link.link.includes("https://") || !link.link.includes("http://")
      ? link.link.replace("//", "")
      : link.link
  );

  const [currentLinkTitle, setCurrentLinkTitle] = useState(link.linkTitle);

  // Function to handle updating the link and link title
  const handleSave = (updatedLink, updatedLinkTitle, index) => {
    // update the links in linkArr
    let newLink = updatedLink;
    if (!newLink.startsWith("http://") && !newLink.startsWith("https://")) {
      newLink = "//" + updatedLink;
    }
    if (!newLink.includes("://")) {
      newLink = newLink.replace(":", "://");
    }
    const newLinkArr = [...linkArr];
    newLinkArr[index] = {
      link: newLink,
      linkTitle: updatedLinkTitle,
    };
    setLinkArr(newLinkArr);
    setCurrentLink(newLink);
    setCurrentLinkTitle(updatedLinkTitle);

    // update local storage
    localStorage.setItem("prevLinkArr", JSON.stringify(newLinkArr));

    handleClose();
  };

  return (
    <div className="fixed inset-0 h-full w-full flex items-center justify-center z-10">
      <div className="absolute inset-0 bg-slate-900 opacity-95"></div>
      <motion.div
        className="relative w-[90%] max-w-sm m-auto bg-slate-100 rounded-lg p-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-lg font-medium mb-4">Edit Bookmark</h2>

        {/* Inputs */}
        <div className="mb-4">
          <label className="block text-gray-800 font-medium mb-2">Link</label>
          <input
            className="w-full input-field"
            type="text"
            value={currentLink}
            onChange={(e) => setCurrentLink(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 font-medium mb-2">
            Link Title
          </label>
          <input
            className="w-full input-field"
            type="text"
            value={currentLinkTitle}
            onChange={(e) => setCurrentLinkTitle(e.target.value)}
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end">
          <button
            className="bg-transparent border-2 border-slate-300 btn-modal"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="bg-slate-900 text-slate-50 btn-modal"
            onClick={() => handleSave(currentLink, currentLinkTitle, index)}
          >
            Save
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default EditLinkModal;
