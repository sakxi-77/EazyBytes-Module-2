import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StockDisplay = () => {
  const [stockData, setStockData] = useState(null);
  
  // Fetch stock data from backend
  useEffect(() => {
    axios.get('/api/stock-data')  // Adjust the URL based on your backend route
      .then((response) => {
        setStockData(response.data);
      })
      .catch((error) => console.error("Error fetching stock data: ", error));
  }, []);
  
  if (!stockData) return <div>Loading...</div>;

  return (
    <div className="stock-display">
      <h2>{stockData.symbol}</h2>
      <p>Price: ${stockData.price}</p>
      <p>Change: {stockData.change}</p>
    </div>
  );
};

axios.get('H3PGVY8RLI7T8GET')  // Replace this with your backend API
  .then((response) => {
    setStockData(response.data);
  })
  .catch((error) => console.error("Error fetching stock data: ", error));
export default StockDisplay;
