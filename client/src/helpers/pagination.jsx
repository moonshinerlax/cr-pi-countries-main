/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import style from "./pagination.module.css"

const itemsPerPage = 10; // Number of items to display per page

const Pagination = ({ totalItems, currentPage, onPageChange }) => {
  const [pageNumbers, setPageNumbers] = useState([]);
 
  useEffect(() => {
    // Calculate the first 5 page numbers starting from the current page
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, startPage + 4);
    const newPageNumbers = [];
    for (let i = startPage; i <= endPage; i++) {
      newPageNumbers.push(i);
    }
    setPageNumbers(newPageNumbers);
  }, [currentPage, totalItems]);

  const handlePageClick = (selectedPage) => {
    onPageChange(selectedPage);
  };

  return (
    <div>
        {pageNumbers.map((pageNumber) => (
          <a

            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            className={pageNumber === currentPage ? style.active : style.unactive}
          >
            {pageNumber}
          </a>
        ))}
      
    </div>
  );
};

export default Pagination;