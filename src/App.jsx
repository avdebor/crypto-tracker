import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import Search from "./components/search/search";
import CryptoTable from "./components/table/table";

const App = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${1}&sparkline=false`
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
    </div>
  );
};

export default App;
