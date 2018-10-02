import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

// Think about inputs and outputs

const Pagination = props => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  console.log("Pagination itemsCount", itemsCount);
  console.log("Pagination pageSize", pageSize);
  console.log("Pagination currentPage", currentPage);
  console.log("Pagination onPageChange", onPageChange);

  const pagesCount = Math.ceil(itemsCount / pageSize);

  console.log("Pagination pagesCount", pagesCount);

  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  console.log("Pagination pages", pages);

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// good to have for resusable components
Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
