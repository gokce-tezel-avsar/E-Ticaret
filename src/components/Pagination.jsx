import React, { useState } from "react";

const Pagination = ({ totalPages = 3 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (page) => {
    setCurrentPage(page);
    console.log("Sayfa:", page);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageClick(currentPage + 1);
    }
  };

  const handleFirst = () => {
    handlePageClick(1);
  };

  return (
    <div className="flex flex-row border border-gray-300 rounded my-10 ">
      <button
        onClick={handleFirst}
        className="py-6 px-8 bg-gray-200 hover:bg-gray-300 transition"
      >
        First
      </button>

      {[...Array(totalPages)].map((_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`p-6 ${
              currentPage === page ? "bg-blue-500 text-white" : "bg-white"
            } hover:bg-gray-100 transition`}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={handleNext}
        className="py-6 px-8 bg-gray-200 hover:bg-gray-300 transition"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
