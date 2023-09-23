import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import Search from "./components/search/search";
import CryptoTable from "./components/table/table";
import Pagination from "./components/pagination/pagination";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10; // Replace with the total number of pages in your pagination

  const handlePageChange = (newPage) => {
    console.log(newPage);

    // Add logic here to fetch data for the new page if needed
    setCurrentPage(newPage);
  };

  const fetchData = () => {};
  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${97}&sparkline=false`
      )
      .then((response) => {
        setCoins(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="app">
      <Search />

      <CryptoTable cryptoData={coins} />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
