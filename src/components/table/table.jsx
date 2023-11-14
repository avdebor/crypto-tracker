/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import "bootstrap/dist/css/bootstrap.min.css";

const CryptoTable = ({ cryptoData }) => {
  return (
    <div className="container mt-5">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Crypto Logo</th>
            <th>Name</th>
            <th>Shortcut</th>
            <th>Price (USD)</th>
            <th>Market Cap (USD)</th>
            <th>Change (24h)</th>
            <th>Total Volume (USD)</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((crypto, index) => (
            <tr key={index}>
              <td>
                <img
                  src={crypto.image} // Replace with the actual URL for the logo
                  alt={crypto.id}
                  width="30"
                  height="30"
                />
              </td>
              <td>{crypto.id}</td>
              <td>{crypto.symbol}</td>
              <td>${crypto.current_price.toFixed(2)}</td>
              <td>${crypto.market_cap.toFixed(0)}</td>

              {crypto.market_cap_change_percentage_24h < 0 ? (
                <td className="text-danger">
                  <i className="fa-solid fa-caret-down"></i>
                  {crypto.market_cap_change_percentage_24h}%
                </td>
              ) : (
                <td className="text-success">
                  <i className="fa-solid fa-caret-up"></i>
                  {crypto.market_cap_change_percentage_24h}%
                </td>
              )}
              <td>${crypto.total_volume.toFixed(0)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
