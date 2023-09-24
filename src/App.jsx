import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import Search from "./components/search/search";
import CryptoTable from "./components/table/table";
import Pagination from "./components/pagination/pagination";

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 50;
  const [coins, setCoins] = useState([]);

  const handlePageChange = (newPage) => {
    fetchData(newPage);
    setCurrentPage(newPage);
  };

  const fetchData = (pageNum) => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=${pageNum}&sparkline=false`
      )
      .then((response) => {
        setCoins(response.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData(1);
  }, []);

  return (
    <div className="app">
      <Search coins={coins} setCoins={setCoins} />

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
