import React from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const Pagination = ({ currentPage, totalItems, itemSize, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemSize);

  const nextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="flex justify-center items-center gap-8">
      <button
        className={`${currentPage === 1 ? "hidden" : "visible"}`}
        onClick={prevPage}
      >
        <MdOutlineKeyboardArrowLeft />
      </button>
      <span className="px-2 py-1">
        Page {currentPage} of {totalPages}
      </span>
      <button
        className={`${currentPage === totalPages ? "hidden" : "visible"}`}
        onClick={nextPage}
      >
        <MdOutlineKeyboardArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
