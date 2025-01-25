const axios = require('axios');

// Replace with your Alpha Vantage API key
const API_KEY = 'H3PGVY8RLI7T8GET';
const BASE_URL = 'https://www.alphavantage.co/query';

const getStockData = async (symbol) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        function: 'TIME_SERIES_INTRADAY',
        symbol: symbol,
        interval: '5min',
        apikey: API_KEY
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching stock data:", error);
    return null;
  }
};

module.exports = { getStockData };
