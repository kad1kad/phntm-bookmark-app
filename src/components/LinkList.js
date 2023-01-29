import { AnimatePresence, motion } from "framer-motion";
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

  const linksPerPage = 20;

  const onRemove = (index) => {
    // Remove link from array
    const newLinkArr = linkArr.filter((link, i) => i !== index);
    setLinkArr(newLinkArr);
    let links = JSON.parse(localStorage.getItem("prevLinkArr"));
    links.splice(index, 1);
    localStorage.setItem("prevLinkArr", JSON.stringify(links));

    // Check if the current page should be updated
    if (
      newLinkArr.length / linksPerPage < currentPage &&
      newLinkArr.length % linksPerPage === 0
    ) {
      setCurrentPage(currentPage - 1);
    } else if (
      index >= (currentPage - 1) * linksPerPage &&
      index < currentPage * linksPerPage
    ) {
      // ensure that the current page is not less than 1
      setCurrentPage(Math.max(currentPage, 1));
    }
  };

  // Get current links
  const indexOfLastLink = currentPage * linksPerPage;
  const indexOfFirstLink = indexOfLastLink - linksPerPage;
  const currentLinks = linkArr.slice(indexOfFirstLink, indexOfLastLink);

  return (
    <div>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 mb-10 mt-5">
        {/* animate exit */}
        <AnimatePresence>
          {currentLinks.map((link, index) => (
            <motion.div
              key={`${link.id}-${index}`}
              exit={{ opacity: 0, y: -200 }}
              transition={{ type: "spring", stiffness: 30 }}
            >
              <LinkItem
                linkArr={linkArr}
                setLinkArr={setLinkArr}
                onRemove={onRemove}
                link={link}
                index={index}
                key={index}
                currentPage={currentPage}
                linksPerPage={linksPerPage}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* hide pagination if no link */}
      {linkArr.length > 0 && (
        <div className="flex justify-center">
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            linkArr={linkArr}
            linksPerPage={linksPerPage}
          />
        </div>
      )}
    </div>
  );
}

export default LinkList;
