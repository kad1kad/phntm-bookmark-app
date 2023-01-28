import React, { useEffect, useState } from "react";
import LinkItem from "./LinkItem";
import Pagination from "./Pagination";

function LinkList({ linkArr, setLinkArr }) {
  // Re-render when linkArr changes
  useEffect(() => {
    console.log("Link list updated");
  }, [linkArr]);

  // start at page 1
  const [currentPage, setCurrentPage] = useState(1);

  const linksPerPage = 3;

  const onRemove = (index) => {
    // Remove link from array
    const newLinkArr = linkArr.filter((link, i) => i !== index);
    setLinkArr(newLinkArr);
    // Check if the current page should be updated
    if ((currentPage - 1) * linksPerPage >= newLinkArr.length) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Get current links
  const indexOfLastLink = currentPage * linksPerPage;
  const indexOfFirstLink = indexOfLastLink - linksPerPage;
  const currentLinks = linkArr.slice(indexOfFirstLink, indexOfLastLink);

  return (
    <div>
      {currentLinks.map((link, index) => (
        <LinkItem
          linkArr={linkArr}
          onRemove={onRemove}
          link={link}
          index={index}
        />
      ))}

      <div className="flex justify-center">
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          linkArr={linkArr}
          linksPerPage={linksPerPage}
        />
      </div>
    </div>
  );
}

export default LinkList;
