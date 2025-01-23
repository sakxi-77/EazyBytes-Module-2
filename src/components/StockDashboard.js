import React, { useState } from "react";
import axios from "axios";

const StockDashboard = () => {
  const [stockSymbol, setStockSymbol] = useState("");
  const [stockData, setStockData] = useState(null);
  const [error, setError] = useState("");

  // Function to fetch stock data
  const fetchStockData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/stock/${stockSymbol}`);
      setStockData(response.data);
      setError(""); // Clear any previous errors
    } catch (err) {
      setError("Failed to fetch stock data. Please check the stock symbol.");
      setStockData(null); // Clear previous data
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Stock Dashboard</h2>
      <div style={styles.inputContainer}>
        <label style={styles.label}>Enter Stock Symbol:</label>
        <input
          type="text"
          value={stockSymbol}
          onChange={(e) => setStockSymbol(e.target.value)}
          style={styles.input}
        />
        <button onClick={fetchStockData} style={styles.button}>
          Fetch Data
        </button>
      </div>

      {/* Display Error */}
      {error && <p style={styles.error}>{error}</p>}

      {/* Display Stock Data */}
      {stockData && (
        <div style={styles.dataContainer}>
          <h3 style={styles.subHeader}>Stock Data for {stockSymbol.toUpperCase()}</h3>
          <pre style={styles.data}>{JSON.stringify(stockData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  header: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  inputContainer: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "10px",
    fontSize: "18px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    width: "80%",
    marginBottom: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  error: {
    color: "red",
    marginBottom: "20px",
  },
  dataContainer: {
    marginTop: "20px",
    textAlign: "left",
  },
  subHeader: {
    fontSize: "20px",
    marginBottom: "10px",
  },
  data: {
    backgroundColor: "#e9ecef",
    padding: "10px",
    borderRadius: "4px",
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
  },
};

export default StockDashboard;
