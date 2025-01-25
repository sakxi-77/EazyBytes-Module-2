import React from "react";

const AboutPage = () => {
  return (
    <div style={styles.aboutPage}>
      <h2 style={styles.header}>About Us</h2>
      <p style={styles.paragraph}>
        Welcome to the Stock Market Dashboard, a modern platform for tracking stocks, managing your portfolio, and staying updated with the latest market trends. Our goal is to simplify the stock market for traders and investors alike.
      </p>

      <div style={styles.aboutDetails}>
        <h3 style={styles.subHeader}>About the Website:</h3>
        <p style={styles.paragraph}>
          This platform offers a set of features designed to enhance your trading experience:
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Real-time stock tracking with interactive charts</li>
          <li style={styles.listItem}>Portfolio management with performance analytics</li>
          <li style={styles.listItem}>Educational resources to improve trading strategies</li>
        </ul>
      </div>

      <h3 style={styles.subHeader}>Stock Market Basics</h3>
      <p style={styles.paragraph}>
        The stock market is a place where stocks, bonds, and other securities are bought and sold. It plays a crucial role in the economy by enabling businesses to raise capital and providing investors with opportunities to grow their wealth.
      </p>

      <h3 style={styles.subHeader}>Investment Strategies</h3>
      <p style={styles.paragraph}>
        There are several strategies to succeed in the stock market, including:
      </p>
      <ul style={styles.list}>
        <li style={styles.listItem}>Value Investing: Picking undervalued stocks with strong potential.</li>
        <li style={styles.listItem}>Growth Investing: Investing in companies with high growth potential.</li>
        <li style={styles.listItem}>Dividend Investing: Focusing on stocks that pay consistent dividends.</li>
      </ul>

      <div style={styles.resources}>
        <h3 style={styles.subHeader}>Resources to Get You Started</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <a href="https://www.investopedia.com/" target="_blank" style={styles.link}>Investopedia</a> – A great resource for learning about financial markets.
          </li>
          <li style={styles.listItem}>
            <a href="https://www.thebalance.com/stock-market-basics-357301" target="_blank" style={styles.link}>The Balance - Stock Market Basics</a>
          </li>
          <li style={styles.listItem}>
            <a href="https://www.morningstar.com/stocks" target="_blank" style={styles.link}>Morningstar</a> – Offers insights into stock analysis and investment strategies.
          </li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  aboutPage: {
    backgroundColor: "#1d1f27",
    color: "#f5f5f5",
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    animation: "fadeIn 1s ease-out"
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#e2e2e2",
    fontSize: "32px",
    fontWeight: "bold",
  },
  paragraph: {
    textAlign: "left",
    marginBottom: "20px",
    color: "#dcdcdc",
    fontSize: "16px",
  },
  aboutDetails: {
    marginTop: "20px",
  },
  resources: {
    marginTop: "30px",
  },
  subHeader: {
    marginBottom: "10px",
    color: "#ccc",
    fontSize: "20px",
  },
  list: {
    listStyle: "disc",
    paddingLeft: "20px",
  },
  listItem: {
    marginBottom: "10px",
    color: "#dcdcdc",
    fontSize: "16px",
  },
  link: {
    color: "#8a9bd4",
    textDecoration: "none",
    fontSize: "16px",
  },
};

export default AboutPage;
