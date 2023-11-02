/**
 * Pagination Component: Renders pagination buttons.
 */

import React from 'react';
import './Pagination.scss';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="pagination-container">
      {pages.map((page) => (
        <button
          key={page}
          className={`pagination-button ${Number(currentPage) === page ? 'active' : ''}`}
          onClick={() => onPageChange(page)}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
