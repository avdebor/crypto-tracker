import React from "react";
import { useState } from "react";
import "./search.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

const Search = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // You can implement your search functionality here
    alert(`Searching for: ${searchText}`);
  };

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
          <button className="btn btn-primary btn-lg" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
