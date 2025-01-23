import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

const Stocks = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get(
          "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=5min&apikey=H3PGVY8RLI7T8GET"
        );
        const processedData = processStockData(response.data);
        const dataForChart = prepareChartData(processedData);
        setChartData(dataForChart);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch stock data.");
        setLoading(false);
      }
    };

    fetchStockData();
  }, []);

  const processStockData = (data) => {
    const timeSeries = data["Time Series (5min)"];
    if (timeSeries) {
      return Object.keys(timeSeries)
        .slice(0, 10)
        .reverse()
        .map((timestamp) => ({
          time: timestamp,
          close: parseFloat(timeSeries[timestamp]["4. close"]),
        }));
    } else {
      throw new Error("No time series data available.");
    }
  };

  const prepareChartData = (processedData) => ({
    labels: processedData.map((item) => item.time),
    datasets: [
      {
        label: "Stock Price",
        data: processedData.map((item) => item.close),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.4,
      },
    ],
  });

  if (loading) return <p>Loading stock data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <section id="stocks" className="section">
      <h2>Stocks</h2>
      <div className="chart-container">
        <Line data={chartData} />
      </div>
    </section>
  );
  
};

export default Stocks;
