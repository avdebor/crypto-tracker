import React from "react";
import { useState } from "react";
import "./search.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

const Search = ({ coins, setCoins }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const filteredData = coins.filter((item) => item.id.includes(searchText));
    setCoins(filteredData);
  };

  function reloadPage() {
    window.location.reload(false);
  }

  return (
    <div className="container text-center mt-5">
      <h1 className="display-4 text-white">Search a currency</h1>
      <form onSubmit={handleSearchSubmit}>
        <div className="input-group mb-3 mt-4 w-75 mx-auto">
          <input
            type="text"
            className="form-control form-control-lg" // Removed col-6
            placeholder="Search..."
            value={searchText}
            onChange={handleSearchChange}
            style={{ backgroundColor: "white", color: "#000" }}
          />
          <button
            className="btn btn-lg bg-dark text-light"
            onClick={reloadPage}
          >
            <i class="fa fa-times" aria-hidden="true"></i>
          </button>
          <button className="btn btn-primary btn-lg" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
