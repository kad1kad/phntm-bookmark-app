import React from "react";

const Pagination = ({ currentPage, setCurrentPage, linkArr, linksPerPage }) => {
  // avoid negative page numbers
  const handlePageDown = () => {
    if (currentPage <= 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  // avoid page number greater than total number of pages
  const handlePageUp = () => {
    if (currentPage >= Math.ceil(linkArr.length / linksPerPage)) {
      setCurrentPage(Math.ceil(linkArr.length / linksPerPage));
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex absolute bottom-5" role="group">
      <button aria-label="previous page" onClick={handlePageDown} tabIndex="0">
        {"<"}
      </button>

      <div className="mx-5">
        {Array.from(
          { length: Math.ceil(linkArr.length / linksPerPage) },
          (_, i) => (
            <button
              aria-label={`go to page ${i + 1}`}
              className={`${"mx-1"} ${
                currentPage === i + 1 ? "font-bold" : ""
              }`}
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              tabIndex="0"
            >
              {i + 1}
            </button>
          )
        )}
      </div>
      <button aria-label="next page" onClick={handlePageUp} tabIndex="0">
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
