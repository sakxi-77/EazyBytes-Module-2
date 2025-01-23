import React, { useState } from "react";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [stockSymbol, setStockSymbol] = useState("");
  const [shares, setShares] = useState(0);
  const [buyPrice, setBuyPrice] = useState(0);

  // Function to add a stock to the portfolio
  const addStock = () => {
    if (!stockSymbol || shares <= 0 || buyPrice <= 0) {
      alert("Please enter valid stock details.");
      return;
    }

    const newStock = {
      symbol: stockSymbol.toUpperCase(),
      shares: parseInt(shares, 10),
      buyPrice: parseFloat(buyPrice),
    };

    setPortfolio([...portfolio, newStock]);
    setStockSymbol("");
    setShares(0);
    setBuyPrice(0);
  };

  // Function to calculate portfolio analytics
  const calculatePortfolioValue = () => {
    return portfolio.reduce((total, stock) => total + stock.shares * stock.buyPrice, 0).toFixed(2);
  };

  const calculateAveragePrice = () => {
    if (portfolio.length === 0) return 0;

    const totalShares = portfolio.reduce((total, stock) => total + stock.shares, 0);
    const totalCost = portfolio.reduce((total, stock) => total + stock.shares * stock.buyPrice, 0);

    return (totalCost / totalShares).toFixed(2);
  };

  return (
    <div style={styles.portfolioPage}>
      <h2 style={styles.header}>Portfolio Management</h2>

      {/* Add Stock Section */}
      <div style={styles.addStock}>
        <h3 style={styles.subHeader}>Add a Stock</h3>
        
        {/* Stock Symbol */}
        <label style={styles.label}>Stock Symbol (e.g., AAPL)</label>
        <input
          type="text"
          value={stockSymbol}
          onChange={(e) => setStockSymbol(e.target.value)}
          style={styles.input}
        />
        
        {/* Number of Shares */}
        <label style={styles.label}>Number of Shares</label>
        <input
          type="number"
          value={shares}
          onChange={(e) => setShares(e.target.value)}
          style={styles.input}
        />
        
        {/* Buy Price */}
        <label style={styles.label}>Buy Price per Share</label>
        <input
          type="number"
          value={buyPrice}
          onChange={(e) => setBuyPrice(e.target.value)}
          style={styles.input}
        />
        
        <button onClick={addStock} style={styles.button}>Add Stock</button>
      </div>
      {/* Portfolio Table */}
      <div style={styles.portfolioTable}>
        <h3 style={styles.subHeader}>Your Portfolio</h3>
        {portfolio.length > 0 ? (
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.tableHeader}>Stock Symbol</th>
                <th style={styles.tableHeader}>Shares</th>
                <th style={styles.tableHeader}>Buy Price</th>
                <th style={styles.tableHeader}>Total Value</th>
              </tr>
            </thead>
            <tbody>
              {portfolio.map((stock, index) => (
                <tr key={index}>
                  <td style={styles.tableData}>{stock.symbol}</td>
                  <td style={styles.tableData}>{stock.shares}</td>
                  <td style={styles.tableData}>${stock.buyPrice.toFixed(2)}</td>
                  <td style={styles.tableData}>${(stock.shares * stock.buyPrice).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p style={styles.paragraph}>No stocks added to your portfolio yet.</p>
        )}
      </div>

      {/* Portfolio Analytics */}
      <div style={styles.portfolioAnalytics}>
        <h3 style={styles.subHeader}>Portfolio Analytics</h3>
        <p style={styles.paragraph}>
          <strong>Total Portfolio Value:</strong> ${calculatePortfolioValue()}
        </p>
        <p style={styles.paragraph}>
          <strong>Average Buy Price:</strong> ${calculateAveragePrice()}
        </p>
      </div>
    </div>
  );
};

const styles = {
  portfolioPage: {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "30px",
    backgroundColor: "#2e3b4e", // Dark blue background
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    color: "#fff", // White text color
    fontFamily: "'Arial', sans-serif"
  },
  header: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "32px",
    color: "#f39c12" // Warm yellow color
  },
  subHeader: {
    textAlign: "center",
    marginBottom: "15px",
    fontSize: "24px",
    color: "#f39c12"
  },
  paragraph: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "18px"
  },
  addStock: {
    marginBottom: "30px"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    backgroundColor: "#fff", // White background for inputs
    color: "#333", // Dark text
    fontSize: "16px"
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#f39c12", // Yellow button
    color: "#fff",
    fontSize: "18px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease"
  },
  buttonHover: {
    backgroundColor: "#d35400" // Darker yellow on hover
  },
  table: {
    width: "100%",
    marginTop: "20px",
    borderCollapse: "collapse"
  },
  tableHeader: {
    backgroundColor: "#34495e", // Dark grey header
    padding: "10px",
    fontSize: "18px",
    textAlign: "center"
  },
  tableData: {
    padding: "10px",
    textAlign: "center",
    borderBottom: "1px solid #ccc"
  },
  portfolioTable: {
    marginTop: "30px"
  },
  portfolioAnalytics: {
    marginTop: "30px"
  }
};

export default Portfolio;
