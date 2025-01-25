const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Set up your Alpha Vantage API Key here
const apiKey = "H3PGVY8RLI7T8GET";

// Route to get stock data
app.get("/api/stock/:symbol", async (req, res) => {
  const symbol = req.params.symbol;
  console.log("Fetching data for:", symbol); // Add logging to see what symbol is being requested
  try {
    const response = await axios.get(`https://www.alphavantage.co/query`, {
      params: {
        function: "TIME_SERIES_INTRADAY",
        symbol: symbol,
        interval: "5min",
        apikey: apiKey,
      },
    });
    console.log(response.data); // Log the data being returned
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching stock data:", error);
    res.status(500).json({ error: "Failed to fetch stock data" });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
