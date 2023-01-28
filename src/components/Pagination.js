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

  return (
    <div className="flex absolute bottom-5">
      <button onClick={handlePageDown}>Previous</button>

      <div className="mx-10">
        {Array.from(
          { length: Math.ceil(linkArr.length / linksPerPage) },
          (_, i) => (
            <button
              className={`mx-5 ${currentPage === i + 1 ? "text-red-500" : ""}`}
              key={i}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          )
        )}
      </div>
      <button onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
    </div>
  );
};

export default Pagination;
