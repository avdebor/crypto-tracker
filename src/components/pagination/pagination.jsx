/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import "bootstrap/dist/css/bootstrap.min.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <nav>
      <ul className="pagination justify-content-center" data-bs-theme="dark">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
          >
            &lt;
          </button>
        </li>
        <li className="page-item">
          <span className="page-link">{currentPage}</span>
        </li>
        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <button
            className="page-link"
            onClick={() => onPageChange(currentPage + 1)}
          >
            &gt;
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
